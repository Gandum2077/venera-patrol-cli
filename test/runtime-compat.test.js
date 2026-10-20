import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { installRuntimeCompatibility } from "../src/runtime-compat.js";
import { installObserver } from "../src/observer.js";
import { defaults, readConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";

function syntheticNetwork() {
  return {
    async sendRequest(method, url, headers, data) {
      const result = await fetch(url, { method, headers, body: data });
      return { status: result.status, headers: result.headers, body: await result.text() };
    },
    get(url, headers, extra) { return this.sendRequest("GET", url, headers, null, extra); },
    async fetchBytes(method, url, headers, data) {
      const result = await fetch(url, { method, headers, body: data });
      return { status: result.status, body: await result.arrayBuffer() };
    },
  };
}

test("secureRandomBytes provides independent typed buffers and validates limits", () => {
  const globals = { Network: syntheticNetwork() };
  installRuntimeCompatibility(globals, {});
  for (const length of [1, 32, 4096]) {
    const bytes = globals.secureRandomBytes(length);
    assert.ok(bytes instanceof Uint8Array);
    assert.equal(bytes.length, length);
  }
  for (const length of [undefined, null, "32", 0, -1, 1.5, 4097, NaN, Infinity])
    assert.throws(() => globals.secureRandomBytes(length), RangeError);
  const first = globals.secureRandomBytes(32);
  const second = globals.secureRandomBytes(32);
  assert.notEqual(first.buffer, second.buffer);
});

test("redirect and privacy flags are isolated per concurrent request; default traces stay observable", async () => {
  const original = globalThis.fetch;
  const requests = [];
  const events = [];
  globalThis.fetch = async (url, init) => {
    requests.push({ url, init });
    await Promise.resolve();
    const response = new Response("synthetic-response-secret", { status: 302, headers: { location: "/next", "set-cookie": "session=synthetic-cookie-secret; Path=/" } });
    Object.defineProperty(response, "url", { value: url });
    return response;
  };
  const observer = installObserver({ ...defaults, minRequestIntervalMs: 0 }, event => events.push(event), () => "account.login");
  const globals = { Network: syntheticNetwork() };
  installRuntimeCompatibility(globals, observer);
  try {
    const maskedUrl = "https://fixture.invalid/masked?transaction=synthetic-state-secret#synthetic-fragment-secret";
    const [masked, ordinary] = await Promise.all([
      globals.Network.get(maskedUrl, { http_client: "dart:io", Cookie: "session=synthetic-cookie-secret" }, { followRedirects: false, maskQueryInLog: true, maskResponseInLog: true, maskDataInLog: true }),
      globals.Network.get("https://fixture.invalid/ordinary"),
    ]);
    assert.equal(masked.status, 302);
    assert.equal(masked.headers.get("location"), "/next");
    assert.equal(masked.headers.getSetCookie()[0], "session=synthetic-cookie-secret; Path=/");
    assert.equal(masked.body, "synthetic-response-secret");
    assert.equal(ordinary.status, 302);
    assert.equal(requests.find(r => r.url === maskedUrl).init.redirect, "manual");
    assert.equal(requests.find(r => r.url.endsWith("ordinary")).init.redirect, undefined);
    assert.ok(!Object.hasOwn(requests[0].init.headers, "http_client"));
    const trace = JSON.stringify(events);
    for (const secret of ["synthetic-state-secret", "synthetic-cookie-secret", "synthetic-response-secret", "synthetic-fragment-secret"])
      assert.ok(!trace.includes(secret), secret);
    const responses = events.filter(e => e.event === "http.response");
    assert.equal(responses.find(e => e.url.includes("masked")).bodySha256, "[REDACTED]");
    assert.match(responses.find(e => e.url.includes("ordinary")).bodySha256, /^[a-f0-9]{64}$/);
  } finally {
    observer.restore();
    globalThis.fetch = original;
  }
});

test("masked transport failures retain classification without exposing generated request values", async () => {
  const original = globalThis.fetch;
  const events = [];
  globalThis.fetch = async () => { throw new Error("fetch failed synthetic-body-secret synthetic-cookie-secret synthetic-query-secret"); };
  const observer = installObserver({ ...defaults, retries: 0, minRequestIntervalMs: 0 }, event => events.push(event), () => "account.login");
  const globals = { Network: syntheticNetwork() };
  installRuntimeCompatibility(globals, observer);
  try {
    await assert.rejects(globals.Network.sendRequest("POST", "https://fixture.invalid/login?value=synthetic-query-secret", { Cookie: "synthetic-cookie-secret" }, "synthetic-body-secret", { maskQueryInLog: true, maskDataInLog: true, maskResponseInLog: true }), error => {
      assert.equal(error.category, "network_error");
      assert.equal(error.message, "Network request failed (details masked)");
      return true;
    });
    assert.equal(events.at(-1).category, "network_error");
    for (const secret of ["synthetic-body-secret", "synthetic-cookie-secret", "synthetic-query-secret"])
      assert.ok(!JSON.stringify(events).includes(secret));
  } finally {
    observer.restore();
    globalThis.fetch = original;
  }
});

test("real runtime keeps manual redirect cookies and storeCredentials:false saves only account state", async (t) => {
  const base = "https://fixture.invalid";
  const previousAuth = process.env.PATROL_AUTH;
  const previousState = process.env.PATROL_AUTH_STATE;
  const previousOptions = process.env.NODE_OPTIONS;
  delete process.env.PATROL_AUTH_STATE;
  process.env.PATROL_AUTH = JSON.stringify({ fixture: { credentials: { username: "synthetic-user-private", password: "synthetic-password-private" } } });
  t.after(() => {
    if (previousAuth === undefined) delete process.env.PATROL_AUTH;
    else process.env.PATROL_AUTH = previousAuth;
    if (previousState === undefined) delete process.env.PATROL_AUTH_STATE;
    else process.env.PATROL_AUTH_STATE = previousState;
    if (previousOptions === undefined) delete process.env.NODE_OPTIONS;
    else process.env.NODE_OPTIONS = previousOptions;
  });
  const dir = await mkdtemp(path.join(tmpdir(), "patrol-runtime-compat-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  // The worker runs the real runtime and cookie jar against synthetic responses;
  // this preload is test-only and opens no sockets or external services.
  const preload = path.join(dir, "synthetic-transport.mjs");
  await writeFile(preload, `globalThis.fetch=async(url,init)=>{
    const target=new URL(url);
    if(target.origin!=='${base}'||init.redirect!=='manual') throw Error('Unexpected transport');
    const headers=new Headers(init.headers);
    if(headers.has('http_client')) throw Error('Transport selector reached HTTP');
    let response;
    if(target.pathname==='/start') {
      response=new Response('synthetic-form-secret',{status:302,headers:{location:'/next','set-cookie':'login=synthetic-intermediate-secret; Path=/; HttpOnly'}});
    } else if(target.pathname==='/next'&&headers.get('cookie')==='login=synthetic-intermediate-secret') {
      response=new Response('ready');
    } else { response=new Response('missing intermediate cookie',{status:401}); }
    Object.defineProperty(response,'url',{value:url});
    return response;
  };`);
  process.env.NODE_OPTIONS = `${previousOptions ?? ""} --import ${pathToFileURL(preload).href}`.trim();
  for (const store of [false, true]) {
    const directory = path.join(dir, String(store));
    await mkdir(directory);
    const file = path.join(directory, "patrol.json");
    await writeFile(path.join(directory, "fixture.js"), `class C extends ComicSource {
      name='C';key='fixture';version='1.0.0';
      account={storeCredentials:${store},login:async(username,password)=>{
        if(!(secureRandomBytes(32) instanceof Uint8Array)) throw Error('Invalid random bytes');
        const extra={followRedirects:false,maskQueryInLog:true,maskDataInLog:true,maskResponseInLog:true};
        const headers={http_client:'dart:io'};
        const first=await Network.get('${base}/start?state=synthetic-generated-state',headers,extra);
        if(first.status!==302||first.headers.location!=='/next') throw Error('Redirect was not returned');
        const second=await Network.get('${base}'+first.headers.location,headers,extra);
        if(second.status!==200||second.body!=='ready') throw Error('Intermediate cookie was lost');
        return 'ok';
      }};
      favorites={loadComics:async()=>{
        const account=this.loadData('account');
        if(${store} ? !Array.isArray(account) : account!=='ok') throw Error('Wrong account storage');
        return {comics:[],maxPage:1};
      }};
    }`);
    await writeFile(file, JSON.stringify({ version: 1, configPaths: ["fixture.js"], sources: { fixture: { auth: "fixture" } }, defaults: { minRequestIntervalMs: 0, pages: 1 } }));
    const { report, reportFile } = await runPatrol(await readConfig(file, { envFile: false }));
    const result = report.sources[0];
    assert.equal(report.summary.failed, 0, JSON.stringify(result.stages));
    assert.ok(result.stages.some(s => s.path === "account.login" && s.status === "passed"));
    assert.ok(result.stages.some(s => s.path === "favorites.loadComics" && s.status === "passed"));
    const state = JSON.parse(await readFile(path.join(directory, ".patrol-state", "PATROL_AUTH_STATE.json"), "utf8"));
    assert.deepEqual(state.sources.fixture.data.account, store ? ["synthetic-user-private", "synthetic-password-private"] : "ok");
    if (!store) {
      for (const secret of ["synthetic-user-private", "synthetic-password-private"])
        assert.ok(!JSON.stringify(state).includes(secret));
    }
    const publicOutput = (await readFile(reportFile, "utf8")) + (await readFile(result.traceFile, "utf8"));
    for (const secret of ["synthetic-generated-state", "synthetic-intermediate-secret", "synthetic-form-secret", "synthetic-user-private", "synthetic-password-private"])
      assert.ok(!publicOutput.includes(secret), secret);
  }
});
