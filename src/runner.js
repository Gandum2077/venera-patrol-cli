import { fork } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdtemp, mkdir, rm, writeFile, rename } from "node:fs/promises";
import { appendFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { discoverSources, expandEnv, brokenReason } from "./config.js";
import { createRedactor, sanitizeEvent } from "./redact.js";
import { summarizeSource, finishReport, markdown } from "./report.js";
import { PatrolError } from "./errors.js";

const workerFile = fileURLToPath(new URL("./worker.js", import.meta.url));
async function writeAtomic(filename, data) {
  const temp = `${filename}.${randomUUID()}.tmp`;
  await writeFile(temp, data, { mode: 0o600 });
  await rename(temp, filename);
}

async function runSource(descriptor, config, options) {
  const start = Date.now();
  const source = {
    key: descriptor.key,
    file: descriptor.file,
    capabilities: [],
    stages: [],
    startedAt: new Date(start).toISOString(),
  };
  let settings = config.sources[descriptor.key] ?? {};
  // A manually disabled source is never evaluated, and needs no credentials.
  if (settings.broken) {
    source.stages.push({
      path: "source",
      status: "skipped",
      category: "manual_broken",
      reason: brokenReason(settings, "*"),
      durationMs: 0,
    });
    return summarizeSource(source, options.mode);
  }
  try {
    settings = options.mode === "list" ? {} : expandEnv(settings);
  } catch (error) {
    source.stages.push({
      path: "configuration.apply",
      status: "failed",
      category: "config_invalid",
      reason: error.message,
      durationMs: 0,
    });
    return summarizeSource(source);
  }
  const redact = createRedactor(settings);
  const dataDir = await mkdtemp(path.join(tmpdir(), "venera-patrol-"));
  const traceFile = path.join(
    options.runDir,
    `${options.index}-${descriptor.key.replace(/[^\w-]/g, "_")}.trace.jsonl`,
  );
  source.traceFile = traceFile;
  await writeFile(traceFile, "", { mode: 0o600 });
  let active = { path: "worker.start", startedAt: new Date().toISOString() },
    stageTimer,
    sourceTimer,
    count = 0,
    fatal = false,
    done = false,
    child;
  function trace(event) {
    if (++count <= config.defaults.maxTraceEvents)
      appendFileSync(
        traceFile,
        JSON.stringify(
          sanitizeEvent(
            {
              schemaVersion: 1,
              runId: options.runId,
              sourceKey: source.key,
              timestamp: new Date().toISOString(),
              ...event,
            },
            redact,
          ),
        ) + "\n",
      );
    else if (count === config.defaults.maxTraceEvents + 1)
      appendFileSync(
        traceFile,
        JSON.stringify({
          event: "trace.truncated",
          reason: "maxTraceEvents exceeded",
        }) + "\n",
      );
  }
  function failure(category, reason) {
    if (fatal) return;
    fatal = true;
    source.stages.push({
      path: active.path,
      status: "failed",
      category,
      reason: redact(reason),
      durationMs: Date.now() - Date.parse(active.startedAt),
    });
    child?.kill("SIGKILL");
  }
  const abort = () => failure("interrupted", "Patrol interrupted");
  try {
    await new Promise((resolve) => {
      child = fork(workerFile, [], {
        cwd: path.dirname(descriptor.file),
        env: {
          ...process.env,
          VENERA_RUNTIME_DATA_DIR: dataDir,
        },
        execArgv: ["--max-old-space-size=512"],
        stdio: ["ignore", "pipe", "pipe", "ipc"],
      });
      // Raw child output may contain credentials or source-controlled text. Do not persist it.
      child.stdout.on("data", (chunk) =>
        trace({ event: "worker.stdout", bytes: chunk.length }),
      );
      child.stderr.on("data", (chunk) =>
        trace({ event: "worker.stderr", bytes: chunk.length }),
      );
      const arm = () => {
        clearTimeout(stageTimer);
        stageTimer = setTimeout(
          () =>
            failure(
              "stage_timeout",
              `Stage exceeded ${config.defaults.stageTimeoutMs}ms; worker terminated`,
            ),
          config.defaults.stageTimeoutMs,
        );
      };
      arm();
      sourceTimer = setTimeout(
        () =>
          failure(
            "source_timeout",
            `Source exceeded ${config.defaults.sourceTimeoutMs}ms; worker terminated`,
          ),
        config.defaults.sourceTimeoutMs,
      );
      options.signal?.addEventListener("abort", abort, { once: true });
      child.on("message", (message) => {
        if (fatal) return;
        if (message.kind === "stage.start") {
          active = message;
          arm();
          trace(message);
          options.onProgress?.({ source: source.key, stage: message.path });
        } else if (message.kind === "stage.result") {
          source.stages.push(message.result);
          trace(message);
          arm();
        } else if (message.kind === "stage.update") {
          const i = source.stages.findIndex((s) => s.id === message.result.id);
          if (i >= 0) source.stages[i] = message.result;
          trace(message);
        } else if (message.kind === "source")
          Object.assign(source, {
            key: message.key,
            name: message.name,
            version: message.version,
            sourceSha256: message.sourceSha256,
            capabilities: message.capabilities,
          });
        else if (message.kind === "capabilities")
          source.capabilities = message.capabilities;
        else if (message.kind === "trace") trace(message);
        else if (message.kind === "fatal")
          failure(message.error.category, message.error.message);
        else if (message.kind === "done") {
          done = true;
          clearTimeout(stageTimer);
        }
      });
      child.once("error", (error) => {
        failure("worker_error", error.message);
        resolve();
      });
      child.once("close", (code, signal) => {
        if (!done && !fatal)
          failure(
            "worker_crash",
            `Worker exited before completion (${code ?? signal})`,
          );
        resolve();
      });
      child.send({
        descriptor,
        policy: config.defaults,
        settings,
        sourceSettings: config.sources,
        mode: options.mode,
      });
      if (options.signal?.aborted) abort();
    });
  } finally {
    clearTimeout(stageTimer);
    clearTimeout(sourceTimer);
    options.signal?.removeEventListener("abort", abort);
    await rm(dataDir, { force: true, recursive: true });
  }
  if (fatal && options.mode !== "list") {
    const paths = new Set(source.stages.map((x) => x.path));
    for (const c of source.capabilities.filter(
      (c) => c.type === "function" && !paths.has(c.path),
    ))
      source.stages.push({
        path: c.path,
        status: "skipped",
        category: "dependency_failed",
        reason: "Worker terminated before this capability",
        durationMs: 0,
      });
  }
  source.durationMs = Date.now() - start;
  return summarizeSource(source, options.mode);
}

export async function runPatrol(config, options = {}) {
  let descriptors = await discoverSources(config);
  if (options.source) {
    const target = path.resolve(options.source);
    descriptors = descriptors.filter(
      (d) =>
        d.key === options.source ||
        d.file === target ||
        path.basename(d.file) === options.source,
    );
    if (descriptors.length !== 1)
      throw new PatrolError(
        "config_invalid",
        `Source must match exactly one index key or file: ${options.source}`,
      );
  }
  const runId = randomUUID();
  const runDir = path.join(options.output ?? config.output, runId);
  await mkdir(runDir, { recursive: true, mode: 0o700 });
  const report = {
    schemaVersion: 1,
    runId,
    mode: options.mode ?? "check",
    startedAt: new Date().toISOString(),
    configurationFile: config.filename,
    policy: config.defaults,
    sources: [],
  };
  const outputs = new Array(descriptors.length);
  let cursor = 0;
  await Promise.all(
    Array.from(
      { length: Math.min(config.defaults.concurrency, descriptors.length) },
      async () => {
        while (cursor < descriptors.length) {
          const index = cursor++;
          if (options.signal?.aborted) {
            outputs[index] = summarizeSource({
              key: descriptors[index].key,
              file: descriptors[index].file,
              capabilities: [],
              stages: [
                {
                  path: "source",
                  status: "failed",
                  category: "interrupted",
                  reason: "Run interrupted before source started",
                  durationMs: 0,
                },
              ],
            });
          } else
            outputs[index] = await runSource(descriptors[index], config, {
              ...options,
              mode: report.mode,
              runId,
              runDir,
              index,
            });
        }
      },
    ),
  );
  report.sources = outputs;
  const actualKeys = new Set();
  for (const s of outputs) {
    if (actualKeys.has(s.key)) {
      s.stages.push({
        path: "source.identity",
        status: "failed",
        category: "config_invalid",
        reason: `Duplicate actual source key: ${s.key}`,
        durationMs: 0,
      });
      summarizeSource(s, report.mode);
    }
    actualKeys.add(s.key);
  }
  finishReport(report);
  await writeAtomic(
    path.join(runDir, "report.json"),
    JSON.stringify(report, null, 2) + "\n",
  );
  await writeAtomic(path.join(runDir, "report.md"), markdown(report));
  await writeAtomic(
    path.join(runDir, "failed-sources.json"),
    JSON.stringify(report.failedSources) + "\n",
  );
  await writeAtomic(
    path.join(runDir, "repairable-sources.json"),
    JSON.stringify(report.repairableSources) + "\n",
  );
  return { report, runDir, reportFile: path.join(runDir, "report.json") };
}
