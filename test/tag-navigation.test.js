import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { readConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";
import { validateResult } from "../src/validate.js";

const tagPath = "comic.onClickTag";
const png =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=";

function sourceCode(tags, onClickTag) {
  return `class C extends ComicSource {
    name='Tag fixture';key='fixture';version='1.0.0';
    comic={
      loadInfo:async()=>({title:'Synthetic comic',cover:${JSON.stringify(png)},tags:${tags}}),
      onClickTag:${onClickTag}
    };
  }`;
}

async function patrol(t, { tags = "undefined", onClickTag, settings = {} }) {
  const dir = await mkdtemp(path.join(tmpdir(), "patrol-tag-test-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const source = path.join(dir, "fixture.js");
  const configFile = path.join(dir, "patrol.json");
  await writeFile(source, sourceCode(tags, onClickTag));
  await writeFile(configFile, JSON.stringify({
    version: 1,
    configPaths: [source],
    output: "reports",
    defaults: { minRequestIntervalMs: 0, stageTimeoutMs: 5000 },
    sources: { fixture: { ...settings, inputs: { comicId: "1", ...settings.inputs } } },
  }));
  const config = await readConfig(configFile, { envFile: false });
  const { report } = await runPatrol(config);
  const result = report.sources[0];
  const trace = (await readFile(result.traceFile, "utf8"))
    .trim().split("\n").filter(Boolean).map((line) => JSON.parse(line));
  return {
    result,
    stages: result.stages.filter((s) => s.path === tagPath),
    calls: trace.filter((e) => e.event === "capability.call" && e.stage === tagPath),
  };
}

test("tag navigation accepts absent targets and Venera search/category formats", () => {
  const valid = [
    null,
    undefined,
    { action: "search" },
    { action: "search", keyword: null },
    { action: "search", keyword: "" },
    { action: "search", keyword: "Writer", options: "ignored legacy field" },
    { action: "category", keyword: "Action" },
    { action: "category", keyword: "Action", param: null },
    { action: "category", keyword: "Action", param: "action", options: [] },
    { page: "search" },
    { page: "search", attributes: {} },
    { page: "search", attributes: { keyword: "" } },
    { page: "search", attributes: { keyword: "Writer", options: ["en"] } },
    { page: "search", attributes: { text: "Writer", options: [] } },
    { page: "search", attributes: { text: "", keyword: 42 } },
    { page: "category", attributes: { category: "Action" } },
    { page: "category", attributes: { category: "Action", param: null } },
    { page: "category", attributes: { category: "Action", param: "action", options: ["new"] } },
    { page: "search", action: "unknown" },
    { page: null, action: "search", keyword: "Writer" },
  ];
  for (const value of valid)
    assert.doesNotThrow(() => validateResult(tagPath, value), JSON.stringify(value));
});

test("tag navigation rejects malformed targets instead of accepting arbitrary non-null values", () => {
  const invalid = [
    false, true, 0, 1, "search", [], {},
    { action: "unknown" },
    { action: "search", keyword: 42 },
    { action: "category" },
    { action: "category", keyword: null },
    { action: "category", keyword: 42 },
    { action: "category", keyword: "Action", param: 1 },
    { page: "unknown" },
    { page: "unknown", action: "search", keyword: "Writer" },
    { page: "search", attributes: [] },
    { page: "search", attributes: { keyword: 42 } },
    { page: "search", attributes: { text: 42, keyword: "Writer" } },
    { page: "search", attributes: { options: "popular" } },
    { page: "search", attributes: { options: [true] } },
    { page: "category" },
    { page: "category", attributes: {} },
    { page: "category", attributes: { category: null } },
    { page: "category", attributes: { category: 42 } },
    { page: "category", attributes: { category: "Action", param: {} } },
    { page: "category", attributes: { category: "Action", options: [null] } },
  ];
  for (const value of invalid)
    assert.throws(
      () => validateResult(tagPath, value),
      (error) => error.category === "contract_violation",
      JSON.stringify(value),
    );
});

test("automatic tag samples cover each nonempty object or Map namespace once", async (t) => {
  const entries = [
    ["status", ["Ongoing", "Completed"]],
    ["empty", []],
    ["author", ["Writer", "Other writer"]],
    ["genre", ["Action", "Drama"]],
    ["note", ["No target"]],
  ];
  for (const tags of [JSON.stringify(Object.fromEntries(entries)), `new Map(${JSON.stringify(entries)})`]) {
    const { result, stages, calls } = await patrol(t, {
      tags,
      onClickTag: `(namespace, tag)=>{
        const first={status:'Ongoing',author:'Writer',genre:'Action',note:'No target'};
        if(tag!==first[namespace]) throw Error('Expected first tag in nonempty namespace');
        if(namespace==='status') return null;
        if(namespace==='note') return undefined;
        if(namespace==='author') return {action:'search',keyword:tag};
        return {page:'category',attributes:{category:tag,param:null}};
      }`,
    });
    assert.equal(result.status, "passed", JSON.stringify(result.stages));
    assert.deepEqual(stages.map((s) => s.status), ["passed", "passed", "passed", "passed"]);
    assert.deepEqual(calls.map((c) => c.args), [
      ["status", "Ongoing"], ["author", "Writer"], ["genre", "Action"], ["note", "No target"],
    ]);
    assert.equal(new Set(stages.map((s) => s.id)).size, 4);
    assert.equal(result.capabilities.filter((c) => c.path === tagPath).length, 1);
    assert.equal(result.summary.callableCapabilities, 2);
    assert.equal(result.summary.checkedCapabilities, 2);
  }
});

test("a non-navigable namespace cannot hide failures in subsequent author or genre samples", async (t) => {
  const { result, stages, calls } = await patrol(t, {
    tags: `({status:['Ongoing'],author:['Writer'],genre:['Action']})`,
    onClickTag: `(namespace, tag)=>{
      if(namespace==='status') return null;
      if(namespace==='author') throw Error('Synthetic author route failure');
      return {action:'category',keyword:tag,param:42};
    }`,
  });
  assert.equal(result.status, "failed");
  assert.deepEqual(stages.map((s) => s.status), ["passed", "failed", "failed"]);
  assert.match(stages[1].reason, /Synthetic author route failure/);
  assert.equal(stages[2].category, "contract_violation");
  assert.equal(calls.length, 3);
  assert.equal(result.summary.checkedCapabilities, 2);
});

test("explicit tag inputs and cases select one sample, with cases taking priority", async (t) => {
  for (const explicitCase of [false, true]) {
    const { result, stages, calls } = await patrol(t, {
      tags: `({author:['Automatic writer'],genre:['Automatic genre']})`,
      onClickTag: `(namespace, tag)=>{
        if(namespace==='' && tag==='Input tag') return null;
        if(namespace==='explicit' && tag==='Case tag') return {page:'search',attributes:{keyword:tag}};
        throw Error('Unexpected automatic sample');
      }`,
      settings: {
        inputs: { tag: { value: "Input tag" } },
        ...(explicitCase ? { cases: { [tagPath]: { args: ["explicit", "Case tag"] } } } : {}),
      },
    });
    assert.equal(result.status, "passed", JSON.stringify(result.stages));
    assert.equal(stages.length, 1);
    assert.deepEqual(calls.map((c) => c.args), [explicitCase ? ["explicit", "Case tag"] : ["", "Input tag"]]);
  }
});

test("missing tag samples stay explicit and cases can supply a sample without details tags", async (t) => {
  for (const tags of ["undefined", "({empty:[]})", "new Map([['empty',[]]])"]) {
    const { stages, calls } = await patrol(t, {
      tags,
      onClickTag: "()=>{throw Error('No sample must not execute callback')}",
    });
    assert.equal(stages.length, 1);
    assert.equal(stages[0].status, "skipped");
    assert.equal(stages[0].category, "missing_input");
    assert.equal(calls.length, 0);
  }
  const { result, stages, calls } = await patrol(t, {
    onClickTag: "(namespace, tag)=>({action:'search',keyword:tag})",
    settings: { cases: { [tagPath]: { args: ["author", "Explicit writer"] } } },
  });
  assert.equal(result.status, "passed", JSON.stringify(result.stages));
  assert.equal(stages.length, 1);
  assert.deepEqual(calls[0].args, ["author", "Explicit writer"]);
});

test("explicit tag expectations still constrain absent targets and can require a jump", async (t) => {
  for (const [value, expect, expectedStatus] of [
    ["null", { equals: null }, "passed"],
    ["undefined", { type: "undefined" }, "passed"],
    ["null", { nonEmpty: true }, "failed"],
    ["null", { type: "object" }, "failed"],
    ["null", { requiredKeys: ["page"] }, "failed"],
    ["({page:'search'})", { nonEmpty: true, type: "object", requiredKeys: ["page"] }, "passed"],
    ["({page:'search'})", { equals: { page: "category", attributes: { category: "Action" } } }, "failed"],
  ]) {
    const { stages } = await patrol(t, {
      onClickTag: `()=>${value}`,
      settings: { cases: { [tagPath]: { args: ["status", "Ongoing"], expect } } },
    });
    assert.equal(stages.length, 1);
    assert.equal(stages[0].status, expectedStatus, JSON.stringify({ value, expect, stages }));
    if (expectedStatus === "failed") assert.equal(stages[0].category, "contract_violation");
  }
});

test("malformed callback return values remain failed patrol stages", async (t) => {
  for (const value of ["42", "[]", "({})", "({action:'unknown'})"]) {
    const { result, stages } = await patrol(t, {
      onClickTag: `()=>${value}`,
      settings: { inputs: { tag: { namespace: "author", value: "Writer" } } },
    });
    assert.equal(result.status, "failed");
    assert.equal(stages.length, 1);
    assert.equal(stages[0].status, "failed", value);
    assert.equal(stages[0].category, "contract_violation", value);
  }
});

test("tag targets support string-keyed top-level Maps and reject nested Map attributes", () => {
  for (const value of [
    new Map([["action", "search"], ["keyword", "Writer"]]),
    new Map([["action", "category"], ["keyword", "Action"], ["param", null]]),
    new Map([["page", "search"], ["attributes", { keyword: "Writer", options: ["en"] }]]),
    new Map([["page", "category"], ["attributes", { category: "Action", param: "action" }]]),
  ]) assert.doesNotThrow(() => validateResult(tagPath, value));

  for (const value of [
    { page: "search", attributes: new Map() },
    { page: "search", attributes: new Map([["keyword", "Writer"]]) },
    { page: "search", attributes: new Map([["keyword", 42]]) },
    { page: "search", attributes: new Map([["options", "popular"]]) },
    { page: "category", attributes: new Map([["category", "Action"], ["options", [42]]]) },
    new Map([["action", "search"], [42, "non-string key"]]),
    { page: "search", attributes: new Map([["keyword", "Writer"], [42, "non-string key"]]) },
  ]) assert.throws(
    () => validateResult(tagPath, value),
    (error) => error.category === "contract_violation",
  );
});

test("real runtime tag callbacks can return legacy and modern top-level Map targets", async (t) => {
  const { result, stages, calls } = await patrol(t, {
    tags: `({author:['Writer'],genre:['Action']})`,
    onClickTag: `(namespace, tag)=> namespace==='author'
      ? new Map([['action','search'],['keyword',tag]])
      : new Map([['page','category'],['attributes',{category:tag,param:null,options:['popular']}]])`,
  });
  assert.equal(result.status, "passed", JSON.stringify(result.stages));
  assert.deepEqual(stages.map((s) => s.status), ["passed", "passed"]);
  assert.deepEqual(stages.map((s) => s.output.type), ["map", "map"]);
  assert.deepEqual(calls.map((c) => c.args), [["author", "Writer"], ["genre", "Action"]]);
});
