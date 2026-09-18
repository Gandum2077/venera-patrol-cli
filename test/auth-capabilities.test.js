import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm, readFile } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import {
  loadDotEnv,
  readAuth,
  applyAuth,
  validatePublicConfig,
} from "../src/auth.js";
import {
  isImplementedFunction,
  enumerate,
  resolveCapability,
} from "../src/capabilities.js";
import { readConfig } from "../src/config.js";

test("empty function bodies, methods, comments and async forms are absent", () => {
  const functions = [
    function () {},
    async function () {},
    () => {},
    async () => {
      /* only comments */
    },
    { loadNext(next) {} }.loadNext,
    {
      async loadNext(next = { a: 1 }) {
        /* { nested braces } */
      },
    }.loadNext,
    function () {
      "use strict";
    },
  ];
  for (const fn of functions)
    assert.equal(isImplementedFunction(fn), false, fn.toString());
  for (const fn of [
    () => ({}),
    () => undefined,
    () => {
      return;
    },
    function () {
      throw Error("failure");
    },
    {
      load(next = { a: "{}" }) {
        return next;
      },
    }.load,
  ])
    assert.equal(isImplementedFunction(fn), true, fn.toString());
  const source = {
    explore: [{ loadNext(next) {} }],
    search: { load: async () => ({ comics: [] }) },
  };
  assert.ok(!enumerate(source).some((c) => c.path === "explore[0].loadNext"));
  assert.equal(
    resolveCapability(source, "explore[0].loadNext").value,
    undefined,
  );
});
test("dotenv supports quoted JSON and never overrides Actions environment", async (t) => {
  const dir = await mkdtemp(path.join(tmpdir(), "patrol-auth-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const file = path.join(dir, ".env");
  await writeFile(
    file,
    'PATROL_ENV_TEST="from file"\nPATROL_ENV_JSON=\'{"token":"literal#value"}\'\n',
  );
  process.env.PATROL_ENV_TEST = "from actions";
  t.after(() => {
    delete process.env.PATROL_ENV_TEST;
    delete process.env.PATROL_ENV_JSON;
  });
  await loadDotEnv(file);
  assert.equal(process.env.PATROL_ENV_TEST, "from actions");
  assert.deepEqual(JSON.parse(process.env.PATROL_ENV_JSON), {
    token: "literal#value",
  });
});
test("secret mapping is restricted to credentials, data and private settings", () => {
  const env = {
    PATROL_AUTH: JSON.stringify({
      source: {
        credentials: { username: "user", password: "private" },
        data: { token: "token" },
        settings: { apiToken: "api" },
      },
    }),
  };
  const settings = applyAuth(
    { auth: "source", settings: { quality: "original" } },
    env,
  );
  assert.equal(settings.credentials.password, "private");
  assert.equal(settings.settings.quality, "original");
  assert.equal(settings.settings.apiToken, "api");
  assert.equal(applyAuth({ auth: "missing" }, env).authMissing, true);
  assert.throws(
    () => readAuth({ PATROL_AUTH: '{"secret":"do-not-print' }),
    (e) => !e.message.includes("do-not-print"),
  );
  assert.throws(
    () => readAuth({ PATROL_AUTH: '{"source":{"allowMutations":true}}' }),
    /only contain/,
  );
});
test("tracked config rejects literal credential payloads and private data", () => {
  assert.throws(
    () =>
      validatePublicConfig({
        sources: { source: { credentials: { password: "secret" } } },
      }),
    /PATROL_AUTH/,
  );
  assert.throws(
    () =>
      validatePublicConfig({
        sources: { source: { data: { token: "secret" } } },
      }),
    /PATROL_AUTH/,
  );
  assert.throws(
    () =>
      validatePublicConfig({
        sources: { source: { settings: { accessToken: "secret" } } },
      }),
    /environment reference/,
  );
  assert.doesNotThrow(() =>
    validatePublicConfig({
      sources: {
        source: {
          auth: "source",
          settings: { accessToken: "${TOKEN}", quality: "high" },
        },
      },
    }),
  );
});
test("the committed configuration and template are public and runnable without .env", async () => {
  for (const filename of ["patrol.config.json", "patrol.example.json"]) {
    const config = await readConfig(filename, { envFile: false });
    assert.ok(config.configPaths.length);
    const raw = JSON.parse(await readFile(filename, "utf8"));
    assert.ok(
      Object.values(raw.sources).every((s) => !s.credentials && !s.data),
    );
  }
});
