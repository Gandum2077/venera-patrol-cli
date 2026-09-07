export class PatrolError extends Error {
  constructor(category, message) {
    super(message);
    this.category = category;
  }
}
export class Skip extends PatrolError {}
export function classify(error, evidence) {
  if (error?.category === "contract_violation" && evidence?.category)
    return evidence.category;
  if (error?.category) return error.category;
  let message = String(error?.stack ?? error);
  let cause = error?.cause;
  for (let depth = 0; cause && depth < 5; depth++, cause = cause.cause)
    message +=
      " " + String(cause.message ?? cause) + " " + String(cause.code ?? "");
  if (/timed? ?out|timeout|AbortError/i.test(message)) return "timeout";
  if (/ENOTFOUND|EAI_AGAIN/i.test(message)) return "dns_error";
  if (/CERT_|TLS|SSL/i.test(message)) return "tls_error";
  if (
    /NODE_MODULE_VERSION|Could not locate the bindings|Cannot find module|Cannot find package/i.test(
      message,
    )
  )
    return "runtime_dependency";
  if (/ECONN|fetch failed|network request failed/i.test(message))
    return "network_error";
  if (/not implemented|unsupported.*runtime/i.test(message))
    return "runtime_unsupported";
  if (evidence?.category) return evidence.category;
  if (/login|unauthorized|未登录|登录|凭据/i.test(message))
    return "auth_required";
  return "config_error";
}
export function assert(condition, message) {
  if (!condition) throw new PatrolError("contract_violation", message);
}
