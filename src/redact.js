const sensitive =
  /password|passwd|pwd|token|cookie|authorization|secret|credential|api[-_]?key|account|username/i;
export function createRedactor(config = {}) {
  const secrets = new Set();
  function collect(value, privateValue = false) {
    if (typeof value === "string" && privateValue && value.length) {
      secrets.add(value);
      secrets.add(encodeURIComponent(value));
    } else if (value && typeof value === "object") {
      for (const [key, child] of Object.entries(value))
        collect(
          child,
          privateValue ||
            sensitive.test(key) ||
            ["data", "settings", "headers", "cookieValues"].includes(key),
        );
    }
  }
  collect(config);
  function cleanString(value) {
    for (const secret of [...secrets].sort((a, b) => b.length - a.length))
      value = value.split(secret).join("[REDACTED]");
    return value
      .replace(/(Bearer\s+)[^\s"',;]+/gi, "$1[REDACTED]")
      .replace(
        /(["']?(?:password|token|secret|cookie|authorization|api_key)["']?\s*[=:]\s*["']?)[^\s,;"'}]+/gi,
        "$1[REDACTED]",
      )
      .replace(/https?:\/\/[^\s"<>]+/g, (raw) => {
        try {
          const u = new URL(raw);
          u.username = "";
          u.password = "";
          for (const k of [...u.searchParams.keys()])
            u.searchParams.set(k, "[REDACTED]");
          u.hash = "";
          return u.toString();
        } catch {
          return "[URL]";
        }
      });
  }
  return function redact(value, depth = 0, seen = new WeakSet()) {
    if (depth > 10) return "[DEPTH LIMIT]";
    if (typeof value === "string") return cleanString(value).slice(0, 6000);
    if (typeof value === "bigint") return String(value);
    if (typeof value === "function") return "[Function]";
    if (!value || typeof value !== "object") return value;
    if (value instanceof ArrayBuffer || ArrayBuffer.isView(value))
      return { bytes: value.byteLength };
    if (seen.has(value)) return "[Circular]";
    seen.add(value);
    if (value instanceof Error)
      value = {
        message: value.message,
        category: value.category,
        stack: value.stack,
      };
    if (value instanceof Map) value = Object.fromEntries(value);
    if (Array.isArray(value))
      return value.slice(0, 10000).map((x) => redact(x, depth + 1, seen));
    return Object.fromEntries(
      Object.entries(value)
        .slice(0, 150)
        .map(([k, v]) => [
          cleanString(k),
          sensitive.test(k) ? "[REDACTED]" : redact(v, depth + 1, seen),
        ]),
    );
  };
}

// Credentials can equal ordinary words such as "source" or "passed". Redact
// payloads without corrupting the IPC protocol, capability identities or schema.
export function sanitizeEvent(event, redact) {
  const safe = redact(event);
  for (const key of [
    "kind",
    "event",
    "stage",
    "path",
    "id",
    "key",
    "sourceKey",
    "runId",
    "requestId",
    "category",
    "startedAt",
    "timestamp",
  ])
    if (Object.hasOwn(event, key)) safe[key] = event[key];
  if (event.capabilities) safe.capabilities = event.capabilities;
  if (event.result) {
    for (const key of ["id", "path", "status", "category"])
      if (Object.hasOwn(event.result, key))
        safe.result[key] = event.result[key];
  }
  if (event.error?.category) safe.error.category = event.error.category;
  return safe;
}
