import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { PatrolError } from "./errors.js";
import { applyAuth, loadDotEnv, validatePublicConfig } from "./auth.js";

export const defaults = Object.freeze({
  stageTimeoutMs: 30000,
  sourceTimeoutMs: 300000,
  requestTimeoutMs: 15000,
  concurrency: 2,
  retries: 1,
  minRequestIntervalMs: 250,
  maxRequests: 200,
  maxResponseBytes: 20971520,
  maxTraceEvents: 2000,
  pages: 2,
  imageSamples: 2,
});
const fail = (message) => {
  throw new PatrolError("config_invalid", message);
};
const object = (x) => x !== null && typeof x === "object" && !Array.isArray(x);
export function expandEnv(value) {
  if (typeof value === "string")
    return value.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g, (_, key) => {
      if (process.env[key] === undefined)
        fail(`Missing environment variable: ${key}`);
      return process.env[key];
    });
  if (Array.isArray(value)) return value.map(expandEnv);
  if (object(value))
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, expandEnv(v)]),
    );
  return value;
}
export function validateConfig(raw) {
  if (!object(raw)) fail("Configuration must be an object");
  for (const k of Object.keys(raw))
    if (
      ![
        "version",
        "$schema",
        "configPaths",
        "sources",
        "defaults",
        "output",
      ].includes(k)
    )
      fail(`Unknown configuration field: ${k}`);
  if (raw.version !== 1) fail("version must be 1");
  if (
    raw.output !== undefined &&
    (typeof raw.output !== "string" || !raw.output)
  )
    fail("output must be a nonempty directory path");
  if (
    !Array.isArray(raw.configPaths) ||
    !raw.configPaths.length ||
    raw.configPaths.some((x) => typeof x !== "string" || !x)
  )
    fail("configPaths must contain file, directory or index.json paths");
  if (raw.sources !== undefined && !object(raw.sources))
    fail("sources must be an object keyed by source key");
  if (raw.defaults !== undefined && !object(raw.defaults))
    fail("defaults must be an object");
  const policy = { ...defaults, ...raw.defaults };
  const zero = ["retries", "minRequestIntervalMs"];
  for (const [k, v] of Object.entries(policy)) {
    if (!(k in defaults)) fail(`Unknown defaults field: ${k}`);
    if (!Number.isSafeInteger(v) || v < (zero.includes(k) ? 0 : 1))
      fail(`defaults.${k} must be a valid integer`);
  }
  if (
    policy.concurrency > 16 ||
    policy.retries > 5 ||
    policy.pages > 10 ||
    policy.imageSamples > 20
  )
    fail(
      "Limits exceeded: concurrency<=16, retries<=5, pages<=10, imageSamples<=20",
    );
  for (const [key, s] of Object.entries(raw.sources ?? {})) {
    if (!/^[\w-]+$/.test(key) || !object(s))
      fail(`Invalid source entry: ${key}`);
    for (const k of Object.keys(s))
      if (
        ![
          "broken",
          "auth",
          "brokenCapabilities",
          "credentials",
          "settings",
          "data",
          "inputs",
          "cases",
          "allowMutations",
          "expectedCapabilities",
        ].includes(k)
      )
        fail(`Unknown sources.${key} field: ${k}`);
    if (
      s.broken !== undefined &&
      s.broken !== false &&
      s.broken !== true &&
      typeof s.broken !== "string"
    )
      fail(`${key}.broken must be boolean or reason`);
    if (
      s.auth !== undefined &&
      (typeof s.auth !== "string" || !/^[\w-]+$/.test(s.auth))
    )
      fail(`${key}.auth must be an authorization identifier`);
    if (s.allowMutations !== undefined && typeof s.allowMutations !== "boolean")
      fail(`${key}.allowMutations must be boolean`);
    for (const field of [
      "settings",
      "data",
      "inputs",
      "cases",
      "credentials",
      "brokenCapabilities",
    ])
      if (s[field] !== undefined && !object(s[field]))
        fail(`${key}.${field} must be an object`);
    for (const [p, reason] of Object.entries(s.brokenCapabilities ?? {}))
      if (!p || !(reason === true || (typeof reason === "string" && reason)))
        fail(
          `${key}.brokenCapabilities must map paths to true or nonempty reasons`,
        );
    if (
      s.expectedCapabilities &&
      (!Array.isArray(s.expectedCapabilities) ||
        s.expectedCapabilities.some((p) => typeof p !== "string"))
    )
      fail(`${key}.expectedCapabilities must be string[]`);
    for (const [p, c] of Object.entries(s.cases ?? {})) {
      if (!object(c) || !Array.isArray(c.args))
        fail(`${key}.cases.${p} requires args[]`);
      if (c.expect !== undefined && !object(c.expect))
        fail(`${key}.cases.${p}.expect must be an object`);
      for (const k of Object.keys(c))
        if (!["args", "expect"].includes(k)) fail(`Unknown case field: ${k}`);
      for (const k of Object.keys(c.expect ?? {}))
        if (!["type", "nonEmpty", "equals", "requiredKeys"].includes(k))
          fail(`Unknown expectation: ${k}`);
    }
    const c = s.credentials ?? {};
    for (const k of Object.keys(c))
      if (
        ![
          "username",
          "password",
          "cookieValues",
          "cookies",
          "browserToken",
          "webview",
        ].includes(k)
      )
        fail(`Unknown credential field: ${k}`);
    for (const k of ["username", "password"])
      if (c[k] !== undefined && typeof c[k] !== "string")
        fail(`${key}.credentials.${k} must be a string`);
    const inputs = s.inputs ?? {};
    for (const k of Object.keys(inputs))
      if (
        ![
          "keyword",
          "searchOptions",
          "comicId",
          "epId",
          "category",
          "categoryParam",
          "categoryOptions",
          "rankingOption",
          "folderId",
          "comicUrl",
          "archiveId",
          "tag",
        ].includes(k)
      )
        fail(`Unknown ${key}.inputs field: ${k}`);
    for (const k of ["searchOptions", "categoryOptions"])
      if (
        inputs[k] !== undefined &&
        (!Array.isArray(inputs[k]) ||
          inputs[k].some((x) => typeof x !== "string"))
      )
        fail(`${key}.inputs.${k} must be string[]`);
    if (
      c.browserToken &&
      (!object(c.browserToken) ||
        typeof c.browserToken.dataKey !== "string" ||
        !("value" in c.browserToken))
    )
      fail(`${key}.credentials.browserToken requires dataKey and value`);
    if (
      c.cookies &&
      (!Array.isArray(c.cookies) ||
        c.cookies.some(
          (x) =>
            !object(x) || typeof x.url !== "string" || !Array.isArray(x.values),
        ))
    )
      fail(`${key}.credentials.cookies requires [{url, values: Cookie[]}]`);
    if (
      c.cookieValues &&
      !object(c.cookieValues) &&
      !Array.isArray(c.cookieValues)
    )
      fail(`${key}.credentials.cookieValues must be object or array`);
    if (
      c.webview &&
      (!object(c.webview) ||
        typeof c.webview.url !== "string" ||
        typeof c.webview.title !== "string")
    )
      fail(`${key}.credentials.webview requires url and title`);
  }
  return { ...raw, defaults: policy, sources: raw.sources ?? {} };
}
export async function readConfig(file, { envFile } = {}) {
  const filename = path.resolve(file);
  if (envFile !== false)
    await loadDotEnv(
      envFile
        ? path.resolve(envFile)
        : path.join(path.dirname(filename), ".env"),
    );
  const raw = validateConfig(JSON.parse(await readFile(filename, "utf8")));
  validatePublicConfig(raw);
  return {
    ...raw,
    filename,
    configPaths: raw.configPaths.map((p) =>
      path.resolve(path.dirname(filename), p),
    ),
    output: path.resolve(path.dirname(filename), raw.output ?? "reports"),
  };
}
export function resolveSourceSettings(settings) {
  const resolved = expandEnv(applyAuth(settings));
  const { authMissing, ...validated } = resolved;
  validateConfig({
    version: 1,
    configPaths: ["."],
    sources: { source: validated },
  });
  return resolved;
}
export async function discoverSources(config) {
  const found = new Map();
  async function add(file, key) {
    const resolved = path.resolve(file);
    if (!found.has(resolved))
      found.set(resolved, {
        file: resolved,
        key: key ?? path.basename(file, ".js"),
      });
  }
  for (const entry of config.configPaths) {
    const info = await stat(entry);
    let file = entry;
    if (info.isDirectory()) {
      const names = await readdir(entry);
      if (names.includes("index.json")) file = path.join(entry, "index.json");
      else {
        for (const name of names.sort())
          if (name.endsWith(".js")) await add(path.join(entry, name));
        continue;
      }
    }
    if (file.endsWith(".json")) {
      const index = JSON.parse(await readFile(file, "utf8"));
      if (!Array.isArray(index)) fail(`Source index must be an array: ${file}`);
      for (const item of index) {
        if (
          !object(item) ||
          typeof item.fileName !== "string" ||
          typeof item.key !== "string"
        )
          fail(`Invalid source index entry: ${file}`);
        await add(path.resolve(path.dirname(file), item.fileName), item.key);
      }
    } else if (file.endsWith(".js")) await add(file);
    else fail(`Unsupported configuration path: ${file}`);
  }
  const keys = new Set();
  for (const s of found.values()) {
    if (keys.has(s.key)) fail(`Duplicate source key: ${s.key}`);
    keys.add(s.key);
  }
  if (!found.size) fail("No source files discovered");
  return [...found.values()];
}
export function brokenReason(settings, capability) {
  if (settings.broken)
    return typeof settings.broken === "string"
      ? settings.broken
      : "Manually marked broken";
  for (let [prefix, reason] of Object.entries(
    settings.brokenCapabilities ?? {},
  )) {
    prefix = prefix.replace(/\.\*$/, "");
    if (
      prefix === "*" ||
      capability === prefix ||
      capability.startsWith(prefix + ".") ||
      capability.startsWith(prefix + "[")
    )
      return reason === true ? "Manually marked broken" : reason;
  }
}
