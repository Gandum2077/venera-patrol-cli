import test from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import { writeGithubAuthState } from "../scripts/auth-state-sync.js";
import { readAuthState } from "../src/auth-state.js";

test("state writer passes secrets only over stdin and rejects a failed GitHub update", async () => {
  const state = { version: 1, sources: { ccc: { fingerprint: "f", data: { token: "private-session" } } } };
  let input;
  const spawnCommand = (command, args, options) => {
    assert.equal(command, "gh");
    assert.deepEqual(args, ["secret", "set", "PATROL_AUTH_STATE", "--repo", "owner/repo"]);
    assert.equal(options.env.GH_TOKEN, "private-writer");
    assert.deepEqual(options.stdio, ["pipe", "ignore", "ignore"]);
    const child = new EventEmitter();
    child.stdin = new EventEmitter();
    child.stdin.end = (value) => { input = value; queueMicrotask(() => child.emit("close", 0)); };
    return child;
  };
  await writeGithubAuthState(state, { token: "private-writer", repository: "owner/repo", spawnCommand });
  assert.deepEqual(JSON.parse(input), state);
  await assert.rejects(writeGithubAuthState(state, { token: "", repository: "owner/repo" }), /required/);
  await assert.rejects(writeGithubAuthState({ data: "x".repeat(50000) }, { token: "t", repository: "owner/repo" }), /size limit/);
  await assert.rejects(writeGithubAuthState(state, { token: "t", repository: "owner/repo", spawnCommand: (...args) => {
    const child = spawnCommand("gh", args[1], { ...args[2], env: { GH_TOKEN: "private-writer" } });
    child.stdin.end = () => queueMicrotask(() => child.emit("close", 1));
    return child;
  } }), /Could not update/);
});

test("invalid auth state fails without exposing its contents", () => {
  assert.deepEqual(readAuthState(""), { version: 1, sources: {} });
  for (const raw of ["private-invalid", '{}', '{"version":1,"sources":{"ccc":{"fingerprint":"f","data":null}}}'])
    assert.throws(() => readAuthState(raw), /PATROL_AUTH_STATE is invalid; contents omitted/);
});
