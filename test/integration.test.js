import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

test("null image hooks use defaults and unsupported thumbnail callbacks are not invoked", async (t) => {
  const png =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=";
  const code = `class C extends ComicSource {name='C';key='fixture';version='1.0.0';comic={loadInfo:async()=>({title:'T',cover:${JSON.stringify(png)}}),loadEp:async()=>({images:[${JSON.stringify(png)}]}),onImageLoad:()=>null,onThumbnailLoad:()=>({modifyImage:"throw Error('must not execute')",onLoadFailed:()=>{throw Error('must not execute')}})}}`;
  const config = await setup(t, {
    code,
    sources: { fixture: { inputs: { comicId: "1" } } },
  });
  const { report } = await runPatrol(config);
  assert.equal(report.summary.failed, 0);
  assert.ok(
    report.sources[0].stages.some(
      (s) => s.path === "image.decode" && s.status === "passed",
    ),
  );
  assert.ok(
    report.sources[0].stages.some(
      (s) =>
        s.path === "comic.onThumbnailLoad.modifyImage" &&
        s.category === "unsupported_thumbnail",
    ),
  );
});

const fixture = fileURLToPath(
  new URL("./fixtures/healthy.js", import.meta.url),
);
async function setup(t, { code, sources = {}, limits = {} } = {}) {
  // Fixture credentials live in an env file just like user installations.
  sources = structuredClone(sources);
  const secrets = {};
  for (const [key, s] of Object.entries(sources)) {
    if (s.credentials || s.data) {
      secrets[key] = {
        ...(s.credentials ? { credentials: s.credentials } : {}),
        ...(s.data ? { data: s.data } : {}),
      };
      delete s.credentials;
      delete s.data;
      s.auth = key;
    }
  }
  const previousAuth = process.env.PATROL_AUTH;
  delete process.env.PATROL_AUTH;
  t.after(() => {
    if (previousAuth === undefined) delete process.env.PATROL_AUTH;
    else process.env.PATROL_AUTH = previousAuth;
  });
  const dir = await mkdtemp(path.join(tmpdir(), "patrol-test-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  let source = fixture;
  if (code) {
    source = path.join(dir, "fixture.js");
    await writeFile(source, code);
  }
  const file = path.join(dir, "patrol.json");
  await writeFile(
    path.join(dir, ".env"),
    `PATROL_AUTH=${JSON.stringify(secrets)}\n`,
  );
  await writeFile(
    file,
    JSON.stringify({
      version: 1,
      configPaths: [source],
      output: "reports",
      defaults: { minRequestIntervalMs: 0, stageTimeoutMs: 5000, ...limits },
      sources,
    }),
  );
  return readConfig(file);
}
test("real runtime executes authenticated chain, all page forms, hooks and image decoding", async (t) => {
  const config = await setup(t, {
    sources: {
      healthy: {
        credentials: { username: "tester", password: "secret-password" },
        settings: { mode: "test" },
        inputs: { keyword: "test" },
      },
    },
  });
  const { report, reportFile } = await runPatrol(config);
  const source = report.sources[0];
  assert.equal(
    source.status,
    "passed",
    JSON.stringify(
      source.stages.filter((x) => x.status !== "passed"),
      null,
      2,
    ),
  );
  for (const p of [
    "search.load.page[2]",
    "search.loadNext.page[2]",
    "comic.onImageLoad.onResponse",
    "comic.onImageLoad.modifyImage",
    "image.decode",
    "thumbnail.decode",
  ])
    assert.ok(
      source.stages.some((x) => x.path === p && x.status === "passed"),
      p,
    );
  assert.equal(
    source.stages.filter((x) => x.path === "comic.onImageLoad").length,
    2,
  );
  const trace = await readFile(source.traceFile, "utf8");
  assert.ok(trace.includes("http.response"));
  assert.ok(!trace.includes("secret-password"));
  assert.ok(!(await readFile(reportFile, "utf8")).includes("secret-password"));
});
test("whole-source manual skip does not evaluate invalid code or resolve missing secrets", async (t) => {
  const config = await setup(t, {
    code: 'throw Error("must not run")',
    sources: {
      fixture: {
        broken: "Known broken",
        credentials: { password: "${MISSING_PATROL_TEST}" },
      },
    },
  });
  const { report } = await runPatrol(config);
  assert.equal(report.sources[0].status, "skipped");
  assert.equal(report.sources[0].capabilities.length, 0);
});
test("actual source key resolves settings even when filename differs", async (t) => {
  const code = `class C extends ComicSource { name='C'; key='actual'; version='1.0.0'; settings={v:{type:'input',title:'V'}}; init(){ if(this.loadSetting('v')!=='yes') throw Error('not applied'); } }`;
  const config = await setup(t, {
    code,
    sources: { actual: { settings: { v: "yes" } } },
  });
  const { report } = await runPatrol(config);
  assert.equal(report.sources[0].status, "passed");
});
test("manual function skips and missing credentials cannot become false successes", async (t) => {
  const config = await setup(t, {
    sources: {
      healthy: {
        brokenCapabilities: { search: "API broken", comic: "Unavailable" },
      },
    },
  });
  const { report } = await runPatrol(config);
  const stages = report.sources[0].stages;
  assert.ok(
    stages.some(
      (x) => x.path === "account.login" && x.category === "credentials_missing",
    ),
  );
  assert.ok(
    stages.some(
      (x) => x.path === "search.load" && x.category === "manual_broken",
    ),
  );
  assert.ok(
    !stages.some((x) => x.path === "search.load" && x.status === "passed"),
  );
});
test("hard stage watchdog terminates synchronous infinite loop and keeps inventory", async (t) => {
  const config = await setup(t, {
    code: `class C extends ComicSource {name='C';key='hang';version='1.0.0';init(){while(true){}} search={load:async()=>({comics:[]})};}`,
    limits: { stageTimeoutMs: 1000, sourceTimeoutMs: 5000 },
  });
  const start = Date.now();
  const { report } = await runPatrol(config);
  assert.ok(Date.now() - start < 6000);
  assert.ok(
    report.sources[0].stages.some(
      (x) => x.path === "init" && x.category === "stage_timeout",
    ),
  );
  assert.ok(
    report.sources[0].stages.some(
      (x) => x.path === "search.load" && x.status === "skipped",
    ),
  );
});
test("capability listing evaluates source without init or login", async (t) => {
  const config = await setup(t, {
    code: `class C extends ComicSource {name='C';key='list';version='1.0.0';init(){throw Error('must not initialize');} account={login:()=>{throw Error('must not login')}}}`,
  });
  const { report } = await runPatrol(config, { mode: "list" });
  assert.equal(report.sources[0].status, "listed");
  assert.ok(
    report.sources[0].capabilities.some((c) => c.path === "account.login"),
  );
});
test("unknown extension gets explicit missing-input status, mutations require opt-in", async (t) => {
  const code = `class C extends ComicSource {name='C';key='fixture';version='1.0.0';account={reLogin:()=>42};favorites={addFolder:()=>{throw Error('must not run')}}}`;
  const config = await setup(t, {
    code,
    sources: {
      fixture: {
        cases: { "account.reLogin": { args: [], expect: { equals: 42 } } },
      },
    },
  });
  const { report } = await runPatrol(config);
  assert.ok(
    report.sources[0].stages.some(
      (x) => x.path === "account.reLogin" && x.status === "passed",
    ),
  );
  assert.ok(
    report.sources[0].stages.some(
      (x) =>
        x.path === "favorites.addFolder" && x.category === "mutation_disabled",
    ),
  );
});
test("repeated page and invalid image content are diagnosed", async (t) => {
  const code = `class C extends ComicSource {name='C';key='fixture';version='1.0.0';search={load:async()=>({comics:[{id:'1',title:'A',cover:'data:text/html,not-an-image'}],maxPage:2})};comic={loadInfo:async()=>({title:'A',cover:'data:text/html,not-an-image'}),loadEp:async()=>({images:['data:text/html,not-an-image']})}}`;
  const config = await setup(t, {
    code,
    sources: { fixture: { inputs: { keyword: "x" } } },
  });
  const { report } = await runPatrol(config);
  assert.ok(
    report.sources[0].stages.some(
      (x) =>
        x.path === "search.load.page[2]" && x.category === "contract_violation",
    ),
  );
  assert.ok(
    report.sources[0].stages.some(
      (x) => x.path === "image.decode" && x.category === "image_decode_failed",
    ),
  );
  assert.deepEqual(report.failedSources, ["fixture"]);
});

test("Cookie credentials preserve field order, browser token and webview callback state", async (t) => {
  const code = `class C extends ComicSource {name='C';key='fixture';version='1.0.0';account={
    loginWithCookies:{fields:['member','session'],validate:async values=>values[0]==='42' && values[1]==='session-secret' && Network.getCookies('https://fixture.invalid').some(c=>c.name==='session' && c.value===values[1])},
    loginWithWebview:{url:'https://fixture.invalid/login',checkStatus:(url,title)=>title==='Logged in',onLoginSuccess:()=>{if(this.loadData('token')!=='browser-secret')throw Error('Token missing'); this.saveData('callback',true);}},
    verify:()=>this.isLogged && this.loadData('callback')
  }}`;
  const config = await setup(t, {
    code,
    sources: {
      fixture: {
        credentials: {
          cookieValues: { session: "session-secret", member: "42" },
          cookies: [
            {
              url: "https://fixture.invalid",
              values: [
                {
                  name: "session",
                  value: "session-secret",
                  domain: "fixture.invalid",
                  path: "/",
                },
              ],
            },
          ],
          browserToken: { dataKey: "token", value: "browser-secret" },
          webview: { url: "https://fixture.invalid", title: "Logged in" },
        },
        cases: { "account.verify": { args: [], expect: { equals: true } } },
      },
    },
  });
  const { report } = await runPatrol(config);
  assert.equal(
    report.sources[0].status,
    "passed",
    JSON.stringify(report.sources[0].stages),
  );
  const trace = await readFile(report.sources[0].traceFile, "utf8");
  assert.ok(
    !trace.includes("session-secret") && !trace.includes("browser-secret"),
  );
});
test("image decode failure is recovered through onLoadFailed without false source failure", async (t) => {
  const png =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=";
  const code = `class C extends ComicSource {name='C';key='fixture';version='1.0.0';comic={loadEp:async()=>({images:['data:text/html,error']}),onImageLoad:()=>({onLoadFailed:()=>({url:${JSON.stringify(png)}})})}}`;
  const config = await setup(t, {
    code,
    sources: { fixture: { inputs: { comicId: "1", epId: "1" } } },
  });
  const { report } = await runPatrol(config);
  assert.equal(
    report.sources[0].status,
    "passed",
    JSON.stringify(report.sources[0].stages),
  );
  assert.ok(
    report.sources[0].stages.some(
      (x) => x.path === "image.decode" && x.status === "recovered",
    ),
  );
  assert.ok(
    report.sources[0].stages.some(
      (x) =>
        x.path === "comic.onImageLoad.onLoadFailed" && x.status === "passed",
    ),
  );
});
test("manually broken image transformation prevents decoding", async (t) => {
  const config = await setup(t, {
    sources: {
      healthy: {
        credentials: { username: "tester", password: "secret-password" },
        inputs: { keyword: "test" },
        brokenCapabilities: {
          "comic.onImageLoad.modifyImage": "Broken transform",
        },
      },
    },
  });
  const { report } = await runPatrol(config);
  assert.ok(
    report.sources[0].stages.some(
      (x) =>
        x.path === "comic.onImageLoad.modifyImage" &&
        x.category === "manual_broken",
    ),
  );
  assert.ok(!report.sources[0].stages.some((x) => x.path === "image.decode"));
});
test("list works without resolving unused credentials, dynamic functions accept explicit cases", async (t) => {
  const config = await setup(t, {
    code: `class C extends ComicSource {name='C';key='fixture';version='1.0.0';init(){this.account={check:()=>true}}}`,
    sources: {
      fixture: { credentials: { password: "${PATROL_NOT_SET_LIST}" } },
    },
  });
  assert.equal(
    (await runPatrol(config, { mode: "list" })).report.sources[0].status,
    "listed",
  );
  config.sources.fixture = {
    expectedCapabilities: ["account.check"],
    cases: { "account.check": { args: [], expect: { equals: true } } },
  };
  assert.equal((await runPatrol(config)).report.sources[0].status, "passed");
});
test("batch continues after malformed source and CLI reports exit codes and valid JSON", async (t) => {
  const config = await setup(t, { code: `not a source` });
  config.configPaths.push(fixture);
  const { report } = await runPatrol(config, { mode: "list" });
  assert.equal(report.summary.failed, 1);
  assert.equal(report.summary.listed, 1);
  const cli = fileURLToPath(
    new URL("../bin/venera-patrol.js", import.meta.url),
  );
  const run = promisify(execFile);
  await assert.rejects(
    run(process.execPath, [
      cli,
      "check",
      "fixture",
      "--config",
      config.filename,
    ]),
    (error) => error.code === 1,
  );
  await assert.rejects(
    run(process.execPath, [
      cli,
      "check",
      "nonexistent",
      "--config",
      config.filename,
    ]),
    (error) => error.code === 2,
  );
  const listConfig = await setup(t, {
    sources: {
      healthy: { credentials: { password: "${PATROL_NOT_SET_LIST}" } },
    },
  });
  const { stdout } = await run(process.execPath, [
    cli,
    "list",
    "--json",
    "--config",
    listConfig.filename,
  ]);
  assert.equal(JSON.parse(stdout).summary.listed, 1);
});
