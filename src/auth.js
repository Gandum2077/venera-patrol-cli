import { readFile } from "node:fs/promises";
import { parseEnv } from "node:util";
import { PatrolError } from "./errors.js";

export async function loadDotEnv(filename) {
  let content;
  try {
    content = await readFile(filename, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
  const values = parseEnv(content);
  for (const [key, value] of Object.entries(values))
    if (process.env[key] === undefined) process.env[key] = value;
}

export function readAuth(env = process.env) {
  if (!env.PATROL_AUTH?.trim()) return {};
  let value;
  try {
    value = JSON.parse(env.PATROL_AUTH);
  } catch {
    throw new PatrolError(
      "config_invalid",
      "PATROL_AUTH must be a JSON object; contents omitted",
    );
  }
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new PatrolError(
      "config_invalid",
      "PATROL_AUTH must be a JSON object",
    );
  for (const secret of Object.values(value)) {
    if (
      !secret ||
      typeof secret !== "object" ||
      Array.isArray(secret) ||
      Object.keys(secret).some(
        (k) => !["credentials", "data", "settings"].includes(k),
      )
    )
      throw new PatrolError(
        "config_invalid",
        "Each PATROL_AUTH entry may only contain credentials, data and settings",
      );
    for (const part of Object.values(secret))
      if (!part || typeof part !== "object" || Array.isArray(part))
        throw new PatrolError(
          "config_invalid",
          "Authorization fields must be objects",
        );
  }
  return value;
}

export function applyAuth(settings, env = process.env) {
  if (!settings.auth) return settings;
  const entry = readAuth(env)[settings.auth];
  if (!entry) return { ...settings, authMissing: true };
  return {
    ...settings,
    credentials: { ...settings.credentials, ...entry.credentials },
    settings: { ...settings.settings, ...entry.settings },
    data: { ...settings.data, ...entry.data },
  };
}

/** Public files never contain credential payloads. Programmatic callers can still
 * provide already-resolved credentials, as before. */
export function validatePublicConfig(config) {
  const reference = /^\$\{[A-Za-z_][A-Za-z0-9_]*\}$/;
  const sensitive =
    /password|passwd|pwd|token|cookie|authorization|secret|api[-_]?key/i;
  for (const [key, source] of Object.entries(config.sources ?? {})) {
    if (
      (source.credentials && Object.keys(source.credentials).length) ||
      (source.data && Object.keys(source.data).length)
    )
      throw new PatrolError(
        "config_invalid",
        `sources.${key}: move credentials/data into PATROL_AUTH and use auth to reference it`,
      );
    for (const [name, value] of Object.entries(source.settings ?? {}))
      if (sensitive.test(name) && !reference.test(String(value)))
        throw new PatrolError(
          "config_invalid",
          `sources.${key}.settings.${name}: use an environment reference or PATROL_AUTH settings`,
        );
    for (const [name, value] of Object.entries(source.cases ?? {}))
      if (
        /^account\.(login|loginWithCookies\.validate)$/.test(name) &&
        value.args.some((x) => typeof x !== "string" || !reference.test(x))
      )
        throw new PatrolError(
          "config_invalid",
          `sources.${key}.cases.${name}: authentication arguments must be environment references`,
        );
  }
}
