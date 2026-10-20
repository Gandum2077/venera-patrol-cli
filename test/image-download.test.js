import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readConfig } from "../src/config.js";
import { runPatrol } from "../src/runner.js";

// Keep this independent of the implementation: it is Venera's webUA value.
const webUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36";
const png = "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=";
const base = "https://fixture.invalid";

async function syntheticPatrol(t, { fields = "", hooks = "", responses = {} } = {}) {
  const dir = await mkdtemp(path.join(tmpdir(), "patrol-image-download-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const previous = Object.fromEntries(["NODE_OPTIONS", "PATROL_AUTH", "PATROL_AUTH_STATE"].map(key => [key, process.env[key]]));
  delete process.env.PATROL_AUTH;
  delete process.env.PATROL_AUTH_STATE;
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  });
  const requestsFile = path.join(dir, "requests.jsonl");
  await writeFile(requestsFile, "");
  const preload = path.join(dir, "synthetic-transport.mjs");
  const routes = {
    "/image": { userAgent: webUA, ...responses["/image"] },
    "/thumbnail": { userAgent: webUA, ...responses["/thumbnail"] },
    ...Object.fromEntries(Object.entries(responses).filter(([route]) => !["/image", "/thumbnail"].includes(route))),
  };
  // Only the isolated real-runtime worker imports this transport. Every request
  // is handled locally, including failures; no network fallback is available.
  await writeFile(preload, `import { appendFileSync } from 'node:fs';
    const routes=${JSON.stringify(routes)};
    globalThis.fetch=async(input,init={})=>{
      const url=String(input);
      const target=new URL(url);
      if(target.origin!==${JSON.stringify(base)}||!Object.hasOwn(routes,target.pathname)) throw Error('Unexpected synthetic transport URL');
      const headers=new Headers(init.headers);
      appendFileSync(${JSON.stringify(requestsFile)},JSON.stringify({path:target.pathname,method:init.method,headers:Object.fromEntries(headers)})+'\\n');
      const route=routes[target.pathname];
      let response;
      if(headers.get('user-agent')!==route.userAgent) {
        response=new Response('<html>Just a moment...<script src="/cdn-cgi/challenge-platform/test"></script></html>',{status:403,headers:{'content-type':'text/html'}});
      } else {
        response=new Response(route.body??Buffer.from(${JSON.stringify(png)},'base64'),{status:route.status??200,headers:{'content-type':route.contentType??'image/png'}});
      }
      Object.defineProperty(response,'url',{value:url});
      return response;
    };`);
  process.env.NODE_OPTIONS = `${previous.NODE_OPTIONS ?? ""} --import ${pathToFileURL(preload).href}`.trim();
  await writeFile(path.join(dir, "fixture.js"), `class C extends ComicSource {
    name='Synthetic images';key='fixture';version='1.0.0';
    ${fields}
    comic={
      loadEp:async()=>({images:['${base}/image']}),
      loadThumbnails:async()=>({thumbnails:['${base}/thumbnail'],next:null}),
      ${hooks}
    };
  }`);
  const configFile = path.join(dir, "patrol.json");
  await writeFile(configFile, JSON.stringify({
    version: 1,
    configPaths: ["fixture.js"],
    defaults: { minRequestIntervalMs: 0, retries: 0, pages: 1 },
    sources: { fixture: { inputs: { comicId: "1", epId: "1" } } },
  }));
  const { report } = await runPatrol(await readConfig(configFile, { envFile: false }));
  const source = report.sources[0];
  const requests = (await readFile(requestsFile, "utf8")).trim().split("\n").filter(Boolean).map(line => JSON.parse(line));
  const trace = (await readFile(source.traceFile, "utf8")).trim().split("\n").filter(Boolean).map(line => JSON.parse(line));
  return { report, source, requests, trace };
}

function assertSuccessfulDownloads({ report, source, requests }) {
  assert.equal(report.summary.failed, 0, JSON.stringify(source.stages));
  assert.equal(source.status, "passed", JSON.stringify(source.stages));
  assert.ok(!source.stages.some(stage => stage.status === "skipped"), JSON.stringify(source.stages));
  for (const stage of ["comic.loadEp", "comic.loadThumbnails", "image.download", "image.decode", "thumbnail.download", "thumbnail.decode"])
    assert.ok(source.stages.some(result => result.path === stage && result.status === "passed"), stage);
  assert.deepEqual(requests.map(request => request.path), ["/image", "/thumbnail"]);
}

test("chapter images and thumbnails use Venera webUA when hook headers are absent or null", async (t) => {
  for (const [name, hooks] of [
    ["no hook", ""],
    ["null hook result", "onImageLoad:()=>null,onThumbnailLoad:()=>null,"],
    ["empty hook configuration", "onImageLoad:()=>({}),onThumbnailLoad:()=>({}),"],
    ["null headers", "onImageLoad:()=>({headers:null}),onThumbnailLoad:()=>({headers:null}),"],
  ]) {
    await t.test(name, async (t) => {
      const result = await syntheticPatrol(t, { hooks });
      assertSuccessfulDownloads(result);
      for (const request of result.requests)
        assert.equal(request.headers["user-agent"], webUA, request.path);
    });
  }
});

test("chapter image and thumbnail hooks preserve custom user agents regardless of header case", async (t) => {
  for (const headerName of ["user-agent", "User-Agent"]) {
    await t.test(headerName, async (t) => {
      const userAgent = "Synthetic source browser/1.0";
      const headers = { [headerName]: userAgent, Referer: `${base}/reader`, "X-Fixture": "retained" };
      const result = await syntheticPatrol(t, {
        hooks: `onImageLoad:()=>({headers:${JSON.stringify(headers)}}),onThumbnailLoad:()=>({headers:${JSON.stringify(headers)}}),`,
        responses: { "/image": { userAgent }, "/thumbnail": { userAgent } },
      });
      assertSuccessfulDownloads(result);
      for (const request of result.requests)
        assert.deepEqual(request.headers, { referer: `${base}/reader`, "user-agent": userAgent, "x-fixture": "retained" });
    });
  }
});

test("explicit empty chapter headers replace defaults while thumbnails receive Venera webUA", async (t) => {
  const result = await syntheticPatrol(t, {
    hooks: "onImageLoad:()=>({headers:{}}),onThumbnailLoad:()=>({headers:{}}),",
    responses: { "/image": { userAgent: null } },
  });
  assertSuccessfulDownloads(result);
  assert.deepEqual(result.requests[0].headers, {});
  assert.deepEqual(result.requests[1].headers, { "user-agent": webUA });
});

test("thumbnail default user agent preserves Referer without mutating the hook header map", async (t) => {
  const result = await syntheticPatrol(t, {
    fields: `imageHeaders=Object.freeze({Referer:'${base}/reader'});thumbnailHeaders=Object.freeze({Referer:'${base}/reader'});`,
    hooks: `onImageLoad:()=>({headers:this.imageHeaders,onResponse:bytes=>{
      if(Object.keys(this.imageHeaders).join()!=='Referer') throw Error('Chapter header map was mutated');
      return bytes;
    }}),onThumbnailLoad:()=>({headers:this.thumbnailHeaders,onResponse:bytes=>{
      if(Object.keys(this.thumbnailHeaders).join()!=='Referer') throw Error('Thumbnail header map was mutated');
      return bytes;
    }}),`,
    responses: { "/image": { userAgent: null } },
  });
  assertSuccessfulDownloads(result);
  assert.deepEqual(result.requests[0].headers, { referer: `${base}/reader` });
  assert.deepEqual(result.requests[1].headers, { referer: `${base}/reader`, "user-agent": webUA });
  for (const path of ["comic.onImageLoad.onResponse", "comic.onThumbnailLoad.onResponse"])
    assert.ok(result.source.stages.some(stage => stage.path === path && stage.status === "passed"), path);
});

test("image failure recovery receives Venera webUA when its replacement configuration omits headers", async (t) => {
  const result = await syntheticPatrol(t, {
    hooks: `onImageLoad:()=>({headers:{'User-Agent':'Synthetic first attempt'},onLoadFailed:()=>({url:'${base}/recovered'})}),`,
    responses: {
      "/image": { userAgent: "Synthetic first attempt", status: 403, contentType: "text/html", body: "<html>Just a moment... cf-chl-test</html>" },
      "/recovered": { userAgent: webUA },
    },
  });
  assert.equal(result.report.summary.failed, 0, JSON.stringify(result.source.stages));
  assert.equal(result.source.status, "passed", JSON.stringify(result.source.stages));
  assert.ok(!result.source.stages.some(stage => stage.status === "skipped"), JSON.stringify(result.source.stages));
  assert.deepEqual(result.requests.map(request => request.path), ["/image", "/recovered", "/thumbnail"]);
  assert.equal(result.requests[0].headers["user-agent"], "Synthetic first attempt");
  assert.equal(result.requests[1].headers["user-agent"], webUA);
  assert.ok(result.source.stages.some(stage => stage.path === "image.download" && stage.status === "recovered" && stage.category === "anti_bot"));
  for (const path of ["comic.onImageLoad.onLoadFailed", "image.download", "image.decode", "thumbnail.download", "thumbnail.decode"])
    assert.ok(result.source.stages.some(stage => stage.path === path && stage.status === "passed"), path);
  assert.ok(result.trace.some(event => event.event === "http.response" && event.stage === "image.download" && event.status === 403 && event.category === "anti_bot"));
});

test("image and thumbnail download failures retain challenge evidence separately from plain forbidden responses", async (t) => {
  for (const [category, contentType, body] of [
    ["anti_bot", "text/html", '<html>Just a moment...<script src="/cdn-cgi/challenge-platform/test"></script></html>'],
    ["auth_required", "text/plain", "Forbidden"],
  ]) {
    await t.test(category, async (t) => {
      const response = { status: 403, contentType, body };
      const result = await syntheticPatrol(t, { responses: { "/image": response, "/thumbnail": response } });
      assert.equal(result.report.summary.failed, 1);
      assert.equal(result.source.status, "failed");
      assert.deepEqual(result.requests.map(request => request.path), ["/image", "/thumbnail"]);
      assert.ok(!result.source.stages.some(stage => stage.status === "skipped"), JSON.stringify(result.source.stages));
      for (const path of ["comic.loadEp", "comic.loadThumbnails"])
        assert.ok(result.source.capabilities.some(capability => capability.path === path && capability.type === "function"), path);
      for (const prefix of ["image", "thumbnail"]) {
        const failure = result.source.stages.find(stage => stage.path === `${prefix}.download`);
        assert.equal(failure?.status, "failed", JSON.stringify(result.source.stages));
        assert.equal(failure.category, category, prefix);
        assert.match(failure.reason, /403/);
        assert.ok(!result.source.stages.some(stage => stage.path === `${prefix}.decode`));
        assert.ok(result.trace.some(event => event.event === "http.response" && event.stage === `${prefix}.download` && event.status === 403 && event.category === category), prefix);
      }
    });
  }
});
