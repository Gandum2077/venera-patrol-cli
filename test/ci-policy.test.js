import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { applyCiPolicy } from "../scripts/ci-policy.js";
import { validateConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";

test("CI skips self-hosted sources before evaluating code or resolving authorization", async (t) => {
  const dir = await mkdtemp(path.join(tmpdir(), "patrol-ci-policy-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const keys = ["lanraragi", "komga", "kavita"];
  for (const key of keys)
    await writeFile(path.join(dir, `${key}.js`), "invalid source code");
  const config = validateConfig({
    version: 1,
    configPaths: [dir],
    output: path.join(dir, "reports"),
    sources: {
      komga: { settings: { base_url: "${UNSET_CI_SERVICE_URL}" }, auth: "komga" },
      copy_manga: { inputs: { keyword: "火影" } },
    },
  });
  const ciConfig = applyCiPolicy(config);
  assert.equal(config.sources.komga.broken, undefined);
  assert.equal(ciConfig.sources.copy_manga, config.sources.copy_manga);
  assert.deepEqual(ciConfig.sources.komga.settings, config.sources.komga.settings);
  for (const source of [undefined, ...keys]) {
    const { report } = await runPatrol(ciConfig, { source });
    assert.equal(report.summary.failed, 0);
    assert.equal(report.sources.length, source ? 1 : 3);
    for (const result of report.sources) {
      assert.equal(result.status, "skipped");
      assert.match(result.stages[0].reason, /自建部署/);
      assert.equal(result.traceFile, undefined);
    }
  }
});
