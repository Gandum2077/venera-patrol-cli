#!/usr/bin/env node
import { parseArgs } from "node:util";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { readConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";

const help = `venera-patrol — Venera 配置能力巡检

  venera-patrol check-all --config patrol.config.json
  venera-patrol check <source-key|file.js> --config patrol.config.json
  venera-patrol list [source-key|file.js] --config patrol.config.json
  venera-patrol reproduce <report.json> --source <source-key> --config patrol.config.json

Options:
  --config <file>       巡检配置（默认 patrol.config.json）
  --output <dir>        报告输出目录；每次运行创建独立子目录
  --source <key>        单源筛选
  --env-file <file>     .env 路径（默认配置文件同目录的 .env）
  --no-env             不读取本地 .env（Actions 使用此选项）
  --strict             未完整检查也返回退出码 1（手动整源跳过除外）
  --json               stdout 仅输出 JSON 报告
  --help               显示帮助

Exit: 0 无失败；1 有失败/strict 未完整检查；2 配置或参数错误；130 中断
`;
export async function main(args = process.argv.slice(2)) {
  let config;
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: {
        config: { type: "string", default: "patrol.config.json" },
        output: { type: "string" },
        source: { type: "string" },
        'env-file': { type: 'string' },
        'no-env': { type: 'boolean' },
        strict: { type: "boolean" },
        json: { type: "boolean" },
        help: { type: "boolean", short: "h" },
      },
    });
    if (values.help) {
      console.log(help);
      return 0;
    }
    const [command, target, ...rest] = positionals;
    if (
      !["check", "check-all", "list", "reproduce"].includes(command) ||
      rest.length
    )
      throw new Error("Use check, check-all, list or reproduce; see --help");
    if (command === "check-all" && (target || values.source))
      throw new Error("check-all does not accept a source");
    if (command === "check" && !target && !values.source)
      throw new Error("check requires a source key or file");
    if (command !== "reproduce" && target && values.source)
      throw new Error("Specify the source only once");
    config = await readConfig(values.config, { envFile: values['no-env'] ? false : values['env-file'] });
    let source = target ?? values.source;
    if (command === "reproduce") {
      if (!target) throw new Error("reproduce requires report.json");
      const previous = JSON.parse(await readFile(target, "utf8"));
      if (previous.schemaVersion !== 1 || !Array.isArray(previous.sources))
        throw new Error("Unsupported report");
      source =
        values.source ??
        (previous.sources.length === 1 ? previous.sources[0].key : undefined);
      if (!source || !previous.sources.some((s) => s.key === source))
        throw new Error("Choose a source from the report with --source");
      // Reports contain no credentials. Reproduction always uses the current configuration.
    }
    const controller = new AbortController();
    const abort = () => controller.abort();
    process.on("SIGINT", abort);
    process.on("SIGTERM", abort);
    try {
      const result = await runPatrol(config, {
        source,
        mode: command === "list" ? "list" : "check",
        output: values.output ? path.resolve(values.output) : undefined,
        signal: controller.signal,
      });
      if (values.json) console.log(JSON.stringify(result.report, null, 2));
      else {
        for (const s of result.report.sources)
          console.log(
            `${s.status.padEnd(7)} ${s.key}: ${s.summary.passed} passed, ${s.summary.failed} failed, ${s.summary.skipped} skipped`,
          );
        console.log(`Report: ${result.reportFile}`);
      }
      if (controller.signal.aborted) return 130;
      return result.report.summary.failed ||
        (values.strict && result.report.summary.partial)
        ? 1
        : 0;
    } finally {
      process.off("SIGINT", abort);
      process.off("SIGTERM", abort);
    }
  } catch (error) {
    // Do not echo arbitrary config values or invalid JSON contents.
    console.error(
      error instanceof SyntaxError
        ? "Invalid JSON configuration/report or CLI arguments"
        : error.message,
    );
    return 2;
  }
}
process.exitCode = await main();
