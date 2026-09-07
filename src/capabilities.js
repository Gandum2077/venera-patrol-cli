export const roots = [
  "init",
  "account",
  "explore",
  "category",
  "categoryComics",
  "favorites",
  "search",
  "comic",
  "settings",
];
export function enumerate(source) {
  const result = [];
  function visit(value, path, ancestors = new Set()) {
    if (value == null) return;
    const type =
      typeof value === "function"
        ? "function"
        : Array.isArray(value)
          ? "array"
          : typeof value;
    result.push({ path, type });
    if (typeof value !== "object" || ancestors.has(value)) return;
    const next = new Set(ancestors).add(value);
    for (const key of Object.keys(value))
      visit(
        value[key],
        Array.isArray(value) ? `${path}[${key}]` : `${path}.${key}`,
        next,
      );
  }
  for (const root of roots) visit(source[root], root);
  return result;
}
export function resolveCapability(source, path) {
  const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  if (parts.some((p) => ["__proto__", "prototype", "constructor"].includes(p)))
    throw new Error("Invalid capability path");
  const key = parts.pop();
  const owner = parts.reduce((v, k) => v?.[k], source);
  return { owner, value: owner?.[key] };
}
export function isMutation(path) {
  return /^(favorites\.(add|delete)|comic\.(send|vote|like|star)|account\.logout)|\.callback$|\.onTap$/.test(
    path,
  );
}
export function summarize(value) {
  if (value === undefined) return { type: "undefined" };
  if (value === null) return { type: "null" };
  if (typeof value !== "object") return { type: typeof value, value };
  if (value instanceof ArrayBuffer || ArrayBuffer.isView(value))
    return { type: "bytes", length: value.byteLength };
  if (value instanceof Map) return { type: "map", size: value.size };
  if (Array.isArray(value)) return { type: "array", length: value.length };
  return {
    type: "object",
    keys: Object.keys(value),
    counts: Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => Array.isArray(v))
        .map(([k, v]) => [k, v.length]),
    ),
  };
}
