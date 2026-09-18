import test from "node:test";
import assert from "node:assert/strict";
import {
  mkdtemp,
  writeFile,
  readFile,
  mkdir,
  rm,
  access,
  symlink,
} from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import {
  exportPublicRun,
  archiveRun,
  buildSite,
  readHistory,
} from "../src/archive.js";
import { finishReport, summarizeSource } from "../src/report.js";
const exec = promisify(execFile);
test("CI keeps a sanitized public report when a source fails", async (t) => {
  const root = await fixture(t);
  const source = path.join(root, "fixture.js");
  await writeFile(
    source,
    `class C extends ComicSource {name='Fixture';key='fixture';version='1.0.0';init(){throw Error('failed with '+this.loadData('token'))}}`,
  );
  const config = path.join(root, "config.json");
  await writeFile(
    config,
    JSON.stringify({
      version: 1,
      configPaths: [source],
      sources: { fixture: { auth: "fixture" } },
    }),
  );
  const output = path.join(root, "public");
  await assert.rejects(
    exec(process.execPath, [path.resolve("scripts/ci-patrol.js")], {
      env: {
        ...process.env,
        PATROL_CONFIG: config,
        PATROL_AUTH: '{"fixture":{"data":{"token":"ci-private-secret"}}}',
        PATROL_OUTPUT: path.join(root, "raw"),
        PATROL_PUBLIC_OUTPUT: output,
        PATROL_SOURCE: "",
      },
    }),
    (error) => error.code === 1,
  );
  const text = await readFile(path.join(output, "report.json"), "utf8");
  assert.equal(JSON.parse(text).summary.failed, 1);
  assert.ok(!text.includes("ci-private-secret"));
});
async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), "patrol-history-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}
async function sample(root, id, date, reason = "fixture") {
  const dir = path.join(root, `raw-${id}`);
  await mkdir(dir, { recursive: true });
  const traceFile = path.join(dir, "trace.jsonl");
  await writeFile(
    traceFile,
    JSON.stringify({
      event: "http.response",
      stage: "search.load",
      url: "https://example.com/api?token=private-secret",
      status: 403,
    }) + "\n",
  );
  const report = finishReport({
    schemaVersion: 1,
    runId: id,
    mode: "check",
    startedAt: date,
    configurationFile: "/private/patrol.json",
    sources: [
      summarizeSource({
        key: "fixture",
        file: "/private/fixture.js",
        traceFile,
        capabilities: [{ path: "search.load", type: "function" }],
        stages: [
          {
            path: "search.load",
            status: "failed",
            category: "auth_required",
            reason,
            durationMs: 10,
          },
        ],
      }),
    ],
  });
  const file = path.join(dir, "report.json");
  await writeFile(file, JSON.stringify(report));
  await writeFile(path.join(dir, "database.db"), "DO NOT PUBLISH");
  return file;
}
test("public export scrubs credentials and filesystem paths while preserving detail", async (t) => {
  const root = await fixture(t),
    file = await sample(
      root,
      "first",
      "2026-09-07T00:00:00Z",
      "private-secret",
    );
  const prev = process.env.PATROL_AUTH;
  process.env.PATROL_AUTH =
    '{"fixture":{"credentials":{"password":"private-secret"}}}';
  t.after(() => {
    if (prev === undefined) delete process.env.PATROL_AUTH;
    else process.env.PATROL_AUTH = prev;
  });
  const out = path.join(root, "public");
  await exportPublicRun(file, out);
  const report = JSON.parse(
    await readFile(path.join(out, "report.json"), "utf8"),
  );
  assert.equal(report.sources[0].key, "fixture");
  assert.equal(report.sources[0].stages[0].category, "auth_required");
  assert.equal(report.sources[0].file, "fixture.js");
  for (const name of ["report.json", "report.md", "traces/0.jsonl"])
    assert.ok(
      !(await readFile(path.join(out, name), "utf8")).includes(
        "private-secret",
      ),
    );
  await assert.rejects(access(path.join(out, "database.db")));
});
test("history is sorted, idempotent, immutable, retained and build copies only indexed runs", async (t) => {
  const root = await fixture(t),
    history = path.join(root, "history");
  for (const [id, date] of [
    ["second", "2026-09-07"],
    ["first", "2026-09-06"],
    ["third", "2026-09-08"],
  ]) {
    const out = path.join(root, id);
    await exportPublicRun(await sample(root, id, date), out);
    await archiveRun(out, history, { limit: 2 });
  }
  let index = await readHistory(history);
  assert.deepEqual(
    index.runs.map((x) => x.runId),
    ["third", "second"],
  );
  await assert.rejects(access(path.join(history, "runs", "first")));
  await archiveRun(path.join(root, "third"), history, { limit: 2 });
  assert.equal((await readHistory(history)).runs.length, 2);
  const reportPath = path.join(root, "third", "report.json"),
    raw = JSON.parse(await readFile(reportPath, "utf8"));
  raw.durationMs = 999;
  await writeFile(reportPath, JSON.stringify(raw));
  await assert.rejects(
    archiveRun(path.join(root, "third"), history),
    /immutable/,
  );
  await mkdir(path.join(history, ".git"));
  await writeFile(path.join(history, ".git", "secret"), "do not copy");
  const out = path.join(root, "site");
  await buildSite(history, out);
  await access(path.join(out, "index.html"));
  await assert.rejects(access(path.join(out, "data", ".git")));
  assert.equal((await readHistory(path.join(out, "data"))).runs.length, 2);
});
test("trace traversal and malicious bundles cannot escape their run", async (t) => {
  const root = await fixture(t),
    file = await sample(root, "safe", "2026-09-07");
  const raw = JSON.parse(await readFile(file, "utf8"));
  raw.sources[0].traceFile = "../outside.jsonl";
  await writeFile(file, JSON.stringify(raw));
  await assert.rejects(
    exportPublicRun(file, path.join(root, "public")),
    /report directory/,
  );
  const empty = path.join(root, "empty");
  await mkdir(empty);
  await buildSite(empty, path.join(root, "site"));
  assert.deepEqual(
    (await readHistory(path.join(root, "site", "data"))).runs,
    [],
  );
});
test("publisher pushes a separate history branch without changing main and adds the next run", async (t) => {
  const root = await fixture(t),
    remote = path.join(root, "remote.git"),
    repo = path.join(root, "repo");
  await exec("git", ["init", "--bare", remote]);
  await exec("git", ["init", "--initial-branch=main", repo]);
  await writeFile(path.join(repo, "README.md"), "fixture");
  const git = (args) => exec("git", args, { cwd: repo });
  await git(["add", "."]);
  await git([
    "-c",
    "user.name=Test",
    "-c",
    "user.email=test@example.com",
    "commit",
    "-m",
    "initial",
  ]);
  await git(["remote", "add", "origin", remote]);
  await git(["push", "origin", "main"]);
  const original = (await git(["rev-parse", "HEAD"])).stdout.trim();
  for (const id of ["run-a", "run-b"]) {
    const bundle = path.join(root, id);
    await exportPublicRun(
      await sample(root, id, id === "run-a" ? "2026-09-07" : "2026-09-08"),
      bundle,
    );
    await exec(
      process.execPath,
      [
        path.resolve("scripts/publish-results.js"),
        "--incoming",
        bundle,
        "--worktree",
        path.join(root, "worktree"),
        "--output",
        path.join(root, "site"),
      ],
      { cwd: repo },
    );
  }
  assert.equal((await git(["rev-parse", "HEAD"])).stdout.trim(), original);
  await git(["fetch", "origin", "patrol-results"]);
  const index = JSON.parse(
    (await git(["show", "FETCH_HEAD:index.json"])).stdout,
  );
  assert.equal(index.runs.length, 2);
  assert.equal((await git(["status", "--porcelain"])).stdout, "");
});
