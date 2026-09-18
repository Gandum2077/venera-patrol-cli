import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parseDocument } from "yaml";

const load = async (name) => {
  const doc = parseDocument(
    await readFile(`.github/workflows/${name}.yml`, "utf8"),
    { uniqueKeys: true },
  );
  assert.deepEqual(doc.errors, []);
  return doc.toJSON();
};
test("scheduled patrol saves failed reports and deploys without exposing auth to publisher", async () => {
  const w = await load("patrol");
  assert.equal(w.on.schedule[0].cron, "23 2 * * *");
  assert.ok(w.on.workflow_dispatch.inputs.source);
  assert.equal(w.permissions.contents, "read");
  assert.equal(w.jobs.publish.permissions.contents, "write");
  assert.equal(w.jobs.publish.permissions.pages, "write");
  assert.equal(w.jobs.publish.permissions["id-token"], "write");
  assert.match(w.jobs.publish.if, /always\(\)/);
  assert.match(w.jobs.patrol.if, /default_branch/);
  const steps = w.jobs.patrol.steps,
    check = steps.find((s) => s.id === "check");
  assert.equal(check["continue-on-error"], true);
  assert.equal(check.env.PATROL_AUTH, "${{ secrets.PATROL_AUTH }}");
  const upload = steps.find((s) =>
    s.uses?.startsWith("actions/upload-artifact"),
  );
  assert.match(upload.if, /always\(\)/);
  assert.equal(upload.with.path, "venera-patrol-cli/public-run/");
  assert.ok(!JSON.stringify(w.jobs.publish).includes("secrets.PATROL_AUTH"));
  assert.ok(
    w.jobs.publish.steps.some((s) => s.uses === "actions/deploy-pages@v4"),
  );
});
test("UI refresh uses stored history and shares the publishing concurrency lock", async () => {
  const w = await load("pages"),
    patrol = await load("patrol");
  assert.equal(w.concurrency.group, patrol.concurrency.group);
  assert.equal(w.concurrency["cancel-in-progress"], false);
  assert.ok(w.on.push.paths.includes("site/**"));
  assert.ok(w.jobs.pages.steps.some((s) => s.run?.includes("--build-only")));
  assert.ok(!JSON.stringify(w).includes("PATROL_AUTH"));
  await load("test");
});
