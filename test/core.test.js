import test from "node:test";
import assert from "node:assert/strict";
import {
  validateConfig,
  defaults,
  expandEnv,
  brokenReason,
} from "../src/config.js";
import { enumerate, resolveCapability } from "../src/capabilities.js";
import { createRedactor, sanitizeEvent } from "../src/redact.js";
import { firstChapter, comicList } from "../src/validate.js";
import { installObserver } from "../src/observer.js";

test("configuration rejects misspellings and invalid limits", () => {
  assert.throws(
    () => validateConfig({ version: 1, configPaths: ["x"], default: {} }),
    /Unknown/,
  );
  assert.throws(
    () =>
      validateConfig({
        version: 1,
        configPaths: ["x"],
        defaults: { stageTimeoutMs: 0 },
      }),
    /integer/,
  );
  assert.throws(
    () =>
      validateConfig({
        version: 1,
        configPaths: ["x"],
        sources: { x: { cases: { a: {} } } },
      }),
    /args/,
  );
});
test("environment substitution fails closed and manual skip matches descendants", () => {
  process.env.PATROL_TEST_SECRET = "secret";
  assert.equal(expandEnv("${PATROL_TEST_SECRET}"), "secret");
  assert.throws(
    () => expandEnv("${PATROL_MISSING_VARIABLE}"),
    /Missing environment/,
  );
  const s = {
    brokenCapabilities: {
      "account.loginWithWebview": "broken",
      "explore[0]": true,
    },
  };
  assert.equal(
    brokenReason(s, "account.loginWithWebview.checkStatus"),
    "broken",
  );
  assert.ok(brokenReason(s, "explore[0].load"));
  assert.equal(brokenReason(s, "account.login"), undefined);
});
test("inventory includes nested functions and declarative leaves, preserves this", () => {
  const source = {
    account: {
      login() {
        return true;
      },
      loginWithCookies: {
        fields: ["x"],
        validate() {
          return this.fields;
        },
      },
    },
    explore: [
      {
        load() {
          return [];
        },
      },
    ],
  };
  const inventory = enumerate(source);
  assert.ok(
    inventory.some(
      (x) =>
        x.path === "account.loginWithCookies.validate" && x.type === "function",
    ),
  );
  assert.ok(inventory.some((x) => x.path === "explore[0].load"));
  assert.ok(
    inventory.some((x) => x.path === "account.loginWithCookies.fields[0]"),
  );
  const { owner, value } = resolveCapability(
    source,
    "account.loginWithCookies.validate",
  );
  assert.deepEqual(value.call(owner), ["x"]);
});
test("redaction covers known secrets in arbitrary errors, headers, URLs and cycles", () => {
  const r = createRedactor({
    credentials: { password: "private+pass" },
    data: { session: "session-value" },
  });
  const out = JSON.stringify(
    r({
      message: "private+pass session-value",
      url: "https://u:p@test.invalid/?unusual=private",
      headers: { Authorization: "Bearer private" },
    }),
  );
  assert.ok(!out.includes("private"));
  assert.ok(!out.includes("session-value"));
  const c = {};
  c.self = c;
  assert.equal(r(c).self, "[Circular]");
});
test("credential values never corrupt IPC identifiers and JSON token errors are redacted", () => {
  const redact = createRedactor({
    credentials: { username: "stage", password: "passed" },
  });
  const event = sanitizeEvent(
    {
      kind: "stage.result",
      result: {
        id: "stage-1",
        path: "search.load",
        status: "passed",
        reason: "passed",
      },
    },
    redact,
  );
  assert.equal(event.kind, "stage.result");
  assert.equal(event.result.id, "stage-1");
  assert.equal(event.result.status, "passed");
  assert.equal(event.result.reason, "[REDACTED]");
  assert.ok(
    !redact('{"token":"generated-secret"}').includes("generated-secret"),
  );
});

test("grouped Map and plain object chapters, list contracts", () => {
  assert.equal(
    firstChapter(new Map([["group", new Map([["e1", "Title"]])]])),
    "e1",
  );
  assert.equal(firstChapter({ group: { e2: "Title" } }), "e2");
  assert.equal(firstChapter(null), null);
  assert.throws(() => firstChapter({}), /empty/);
  assert.throws(() => comicList({ comics: [{ id: 1 }] }), /requires/);
});
test("transport retries read requests, traces final status and enforces byte bounds", async () => {
  const original = globalThis.fetch;
  let calls = 0;
  const events = [];
  globalThis.fetch = async () =>
    new Response(++calls === 1 ? "busy" : "ok", {
      status: calls === 1 ? 503 : 200,
    });
  let observer = installObserver(
    { ...defaults, minRequestIntervalMs: 0 },
    (e) => events.push(e),
    () => "search.load",
  );
  try {
    assert.equal(await (await fetch("https://fixture.invalid")).text(), "ok");
    assert.equal(calls, 2);
    assert.equal(events.filter((x) => x.event === "http.response").length, 2);
  } finally {
    observer.restore();
    globalThis.fetch = original;
  }
  globalThis.fetch = async () => new Response("oversized");
  observer = installObserver(
    { ...defaults, maxResponseBytes: 2, minRequestIntervalMs: 0 },
    () => {},
    () => "test",
  );
  try {
    await assert.rejects(fetch("https://fixture.invalid"), /byte limit/);
  } finally {
    observer.restore();
    globalThis.fetch = original;
  }
});
test("transport never retries POST and enforces total request budget", async () => {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response("retry later", { status: 503 });
  };
  const observer = installObserver(
    { ...defaults, minRequestIntervalMs: 0, maxRequests: 1 },
    () => {},
    () => "login",
  );
  try {
    assert.equal(
      (await fetch("https://fixture.invalid", { method: "POST" })).status,
      503,
    );
    assert.equal(calls, 1);
    await assert.rejects(fetch("https://fixture.invalid"), /budget/);
  } finally {
    observer.restore();
    globalThis.fetch = original;
  }
});
