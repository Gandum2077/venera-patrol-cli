import { createHash, randomUUID } from "node:crypto";
import { readFileSync, writeFileSync, renameSync, readdirSync } from "node:fs";

// Private state stays off IPC, traces and public reports. A changed auth payload
// invalidates the cache so a newly exported session takes precedence.
export function readAuthState(raw = process.env.PATROL_AUTH_STATE) {
  if (!raw?.trim()) return { version: 1, sources: {} };
  try {
    const state = JSON.parse(raw);
    if (state.version !== 1 || !state.sources || Array.isArray(state.sources) || typeof state.sources !== "object") throw new Error();
    for (const entry of Object.values(state.sources)) {
      if (!entry || typeof entry.fingerprint !== "string" || !entry.data || typeof entry.data !== "object" || Array.isArray(entry.data)) throw new Error();
    }
    return state;
  } catch {
    throw new Error("PATROL_AUTH_STATE is invalid; contents omitted");
  }
}

export function collectAuthState(directory, initial = readAuthState()) {
  const state = structuredClone(initial);
  for (const name of readdirSync(directory)) {
    if (!/^[a-f0-9]{64}\.json$/.test(name)) continue;
    const entry = JSON.parse(readFileSync(`${directory}/${name}`, "utf8"));
    if (entry.authKey) state.sources[entry.authKey] = { fingerprint: entry.fingerprint, data: entry.data };
  }
  return state;
}

export function persistSourceData(source, settings, filename, registerPrivateData = () => {}) {
  const fingerprint = createHash("sha256")
    .update(JSON.stringify({ auth: settings.auth, credentials: settings.credentials, data: settings.data }))
    .digest("hex");
  const authKey = settings.auth ?? source.key;
  let data = { ...settings.data };
  let cached = readAuthState().sources[authKey];
  const save = source.saveData.bind(source);
  const remove = source.deleteData.bind(source);
  try {
    cached = JSON.parse(readFileSync(filename, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw new Error("Cannot read private authentication state");
  }
  if (cached?.fingerprint === fingerprint) {
    data = cached.data;
    for (const [key, value] of Object.entries(data))
      value === null ? remove(key) : save(key, value);
  }
  registerPrivateData(data);
  const flush = () => {
    registerPrivateData(data);
    const temp = `${filename}.${randomUUID()}.tmp`;
    try {
      writeFileSync(temp, JSON.stringify({ authKey, fingerprint, data }), { mode: 0o600 });
      renameSync(temp, filename);
    } catch {
      throw new Error("Cannot save private authentication state");
    }
  };
  source.saveData = (key, value) => {
    save(key, value);
    data[key] = value;
    flush();
  };
  source.deleteData = (key) => {
    remove(key);
    data[key] = null;
    flush();
  };
}
