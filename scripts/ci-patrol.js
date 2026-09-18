import { mkdir, writeFile, readFile, appendFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { readConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";
import { exportPublicRun } from "../src/archive.js";
import { finishReport } from "../src/report.js";

let config,
  reportFile,
  failed = false;
const output = path.resolve(process.env.PATROL_OUTPUT ?? "reports");
const destination = path.resolve(
  process.env.PATROL_PUBLIC_OUTPUT ?? "public-run",
);
try {
  config = await readConfig(process.env.PATROL_CONFIG ?? "patrol.config.json", {
    envFile: false,
  });
  const result = await runPatrol(config, {
    source: process.env.PATROL_SOURCE || undefined,
    output,
  });
  reportFile = result.reportFile;
  failed = result.report.summary.failed > 0;
} catch (error) {
  failed = true;
  const report = finishReport({
    schemaVersion: 1,
    runId: randomUUID(),
    mode: "check",
    startedAt: new Date().toISOString(),
    sources: [],
    error: {
      category: "run_error",
      message: "巡检配置加载或运行失败；请检查工作流配置和授权信息。",
    },
  });
  const dir = path.join(output, report.runId);
  await mkdir(dir, { recursive: true });
  reportFile = path.join(dir, "report.json");
  await writeFile(reportFile, JSON.stringify(report));
  // Deliberately avoid logging an exception that could include secret JSON.
  console.error(
    "Patrol could not start or finish. A failed-run report was created.",
  );
}
const repo = process.env.GITHUB_REPOSITORY;
let sourceCommit;
try {
  sourceCommit = (
    await readFile(
      process.env.PATROL_SOURCE_COMMIT_FILE ?? ".source-commit",
      "utf8",
    )
  ).trim();
} catch {}
const metadata = {
  trigger: process.env.GITHUB_EVENT_NAME ?? "local",
  source: process.env.PATROL_SOURCE || null,
  sourceCommit,
  cliCommit: process.env.GITHUB_SHA,
  actionsUrl:
    repo && process.env.GITHUB_RUN_ID
      ? `https://github.com/${repo}/actions/runs/${process.env.GITHUB_RUN_ID}`
      : undefined,
};
// Invalid authorization JSON must fail closed: do not publish unsanitized output.
const report = await exportPublicRun(reportFile, destination, {
  config,
  metadata,
});
if (process.env.GITHUB_STEP_SUMMARY)
  await appendFile(
    process.env.GITHUB_STEP_SUMMARY,
    `## 巡检结果\n\n源：${report.summary.total} · 失败：${report.summary.failed} · 未完整检查：${report.summary.partial}\n\n运行：\`${report.runId}\`。公开报告将保存到 patrol-results 分支并部署 Pages。\n`,
  );
console.log(
  `Public report: ${report.runId}; ${report.summary.total} sources, ${report.summary.failed} failures`,
);
process.exitCode = failed ? 1 : 0;
