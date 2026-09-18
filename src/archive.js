import {
  readFile,
  writeFile,
  mkdir,
  cp,
  readdir,
  rm,
  rename,
  lstat,
} from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { createRedactor, sanitizeEvent } from "./redact.js";
import { readAuth } from "./auth.js";
import { resolveSourceSettings } from "./config.js";
import { markdown } from "./report.js";

const safeId = (value) =>
  typeof value === "string" && /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(value);
const json = (file) => readFile(file, "utf8").then(JSON.parse);
async function writeJson(file, value) {
  await writeFile(file, JSON.stringify(value, null, 2) + "\n");
}
export function validateReport(report) {
  if (
    report.schemaVersion !== 1 ||
    !safeId(report.runId) ||
    !Array.isArray(report.sources) ||
    !Number.isFinite(Date.parse(report.startedAt))
  )
    throw new Error("Invalid report schema, run ID or timestamp");
  for (const s of report.sources)
    if (
      typeof s.key !== "string" ||
      !Array.isArray(s.stages) ||
      !Array.isArray(s.capabilities)
    )
      throw new Error("Invalid source report");
}

/** Publish only the report and referenced trace files, never a copy of the raw
 * output directory or runtime databases. Credentials are available only here. */
export async function exportPublicRun(
  reportFile,
  destination,
  { config, metadata = {} } = {},
) {
  const raw = await json(reportFile);
  validateReport(raw);
  const privateConfig = { credentials: readAuth() };
  for (const [key, s] of Object.entries(config?.sources ?? {})) {
    // Missing optional credentials should not prevent publishing another source.
    try {
      privateConfig[key] = resolveSourceSettings(s);
    } catch {
      /* already reported by patrol */
    }
  }
  const redact = createRedactor(privateConfig);
  const report = {
    ...redact(raw),
    runId: raw.runId,
    startedAt: raw.startedAt,
    finishedAt: raw.finishedAt,
    mode: raw.mode,
    summary: raw.summary,
    configurationFile: path.basename(
      raw.configurationFile ?? "patrol.config.json",
    ),
    metadata,
  };
  // Preserve machine identifiers, which may coincidentally equal a username.
  report.failedSources = raw.failedSources;
  report.repairableSources = raw.repairableSources;
  report.sources = [];
  await mkdir(path.join(destination, "traces"), { recursive: true });
  const rawDirectory = path.dirname(path.resolve(reportFile));
  for (const [i, source] of raw.sources.entries()) {
    const clean = {
      ...redact(source),
      key: source.key,
      status: source.status,
      file: path.basename(source.file ?? ""),
      capabilities: source.capabilities,
      summary: source.summary,
      stages: source.stages.map(
        (result) => sanitizeEvent({ result }, redact).result,
      ),
    };
    delete clean.traceFile;
    if (source.traceFile) {
      const tracePath = path.resolve(rawDirectory, source.traceFile);
      if (
        path.dirname(tracePath) !== rawDirectory ||
        !(await lstat(tracePath)).isFile() ||
        (await lstat(tracePath)).isSymbolicLink()
      )
        throw new Error(
          "Trace must be a regular file within the report directory",
        );
      const events = (await readFile(tracePath, "utf8"))
        .split("\n")
        .filter(Boolean)
        .map((line) => sanitizeEvent(JSON.parse(line), redact));
      clean.traceFile = `traces/${i}.jsonl`;
      await writeFile(
        path.join(destination, clean.traceFile),
        events.map((e) => JSON.stringify(e)).join("\n") +
          (events.length ? "\n" : ""),
      );
    }
    report.sources.push(clean);
  }
  await writeJson(path.join(destination, "report.json"), report);
  await writeFile(path.join(destination, "report.md"), markdown(report));
  await writeJson(
    path.join(destination, "failed-sources.json"),
    report.failedSources ?? [],
  );
  await writeJson(
    path.join(destination, "repairable-sources.json"),
    report.repairableSources ?? [],
  );
  return report;
}

export async function readHistory(directory) {
  try {
    const index = await json(path.join(directory, "index.json"));
    if (
      index.schemaVersion !== 1 ||
      !Array.isArray(index.runs) ||
      index.runs.some((r) => !safeId(r.runId))
    )
      throw new Error("Invalid history index");
    return index;
  } catch (error) {
    if (error.code === "ENOENT") return { schemaVersion: 1, runs: [] };
    throw error;
  }
}

async function validateBundle(directory) {
  const report = await json(path.join(directory, "report.json"));
  validateReport(report);
  const allowed = new Set([
    "report.json",
    "report.md",
    "failed-sources.json",
    "repairable-sources.json",
    "traces",
  ]);
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (
      !allowed.has(entry.name) ||
      entry.isSymbolicLink() ||
      (!entry.isFile() && entry.name !== "traces")
    )
      throw new Error("Unexpected file in public report bundle");
    if (entry.name === "traces")
      for (const f of await readdir(path.join(directory, "traces"), {
        withFileTypes: true,
      }))
        if (!f.isFile() || !/^\d+\.jsonl$/.test(f.name))
          throw new Error("Invalid trace bundle");
  }
  for (const s of report.sources)
    if (s.traceFile && !/^traces\/\d+\.jsonl$/.test(s.traceFile))
      throw new Error("Invalid public trace reference");
  return report;
}

export async function archiveRun(incoming, directory, { limit = 90 } = {}) {
  if (!Number.isInteger(limit) || limit < 1 || limit > 1000)
    throw new Error("History limit must be between 1 and 1000");
  const report = await validateBundle(incoming);
  await mkdir(path.join(directory, "runs"), { recursive: true });
  const index = await readHistory(directory);
  const target = path.join(directory, "runs", report.runId);
  try {
    const existing = await readFile(path.join(target, "report.json"), "utf8");
    if (
      existing !== (await readFile(path.join(incoming, "report.json"), "utf8"))
    )
      throw new Error("Refusing to overwrite an immutable run");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    const temporary = path.join(directory, "runs", `.incoming-${randomUUID()}`);
    await cp(incoming, temporary, { recursive: true });
    await rename(temporary, target);
  }
  const record = {
    runId: report.runId,
    startedAt: report.startedAt,
    finishedAt: report.finishedAt,
    durationMs: report.durationMs,
    summary: report.summary,
    error: report.error,
    metadata: report.metadata,
  };
  const all = [
    ...index.runs.filter((r) => r.runId !== report.runId),
    record,
  ].sort(
    (a, b) =>
      Date.parse(b.startedAt) - Date.parse(a.startedAt) ||
      b.runId.localeCompare(a.runId),
  );
  const kept = all.slice(0, limit);
  const next = {
    schemaVersion: 1,
    updatedAt: new Date().toISOString(),
    latestRunId: kept[0]?.runId ?? null,
    retentionLimit: limit,
    runs: kept,
  };
  const tempIndex = path.join(directory, `.index-${randomUUID()}.json`);
  await writeJson(tempIndex, next);
  await rename(tempIndex, path.join(directory, "index.json"));
  for (const old of all.slice(limit))
    await rm(path.join(directory, "runs", old.runId), {
      recursive: true,
      force: true,
    });
  return next;
}

export async function buildSite(history, destination) {
  const out = path.resolve(destination),
    source = path.resolve(history);
  if (
    out === source ||
    source.startsWith(out + path.sep) ||
    out.startsWith(source + path.sep)
  )
    throw new Error("Site output and history must be separate directories");
  await mkdir(out, { recursive: true });
  const assets = fileURLToPath(new URL("../site/", import.meta.url));
  for (const name of ["index.html", "app.js", "style.css", ".nojekyll"])
    await cp(path.join(assets, name), path.join(out, name));
  const index = await readHistory(source);
  // Copy only indexed runs, not .git or temporary files from the history branch.
  await rm(path.join(out, "data"), { recursive: true, force: true });
  await mkdir(path.join(out, "data", "runs"), { recursive: true });
  await writeJson(path.join(out, "data", "index.json"), index);
  for (const run of index.runs) {
    await validateBundle(path.join(source, "runs", run.runId));
    await cp(
      path.join(source, "runs", run.runId),
      path.join(out, "data", "runs", run.runId),
      { recursive: true },
    );
  }
  return out;
}
