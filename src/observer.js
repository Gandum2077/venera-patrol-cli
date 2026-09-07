import { createHash } from "node:crypto";
import { setTimeout as delay } from "node:timers/promises";
import { PatrolError, classify } from "./errors.js";

export function httpCategory(status, sample = "") {
  if (status === 429) return "rate_limited";
  if (status === 451) return "region_restricted";
  if (/cf-chl-|challenge-platform|Just a moment|captcha/i.test(sample))
    return "anti_bot";
  if (status === 401 || status === 403) return "auth_required";
  if (status >= 400) return "http_error";
  if (/<html/i.test(sample) && /type=["']password|sign in|登录/i.test(sample))
    return "auth_required";
}

/** Intercepts the Node transport used by runtime Network and fetch, preserving its cookie jar. */
export function installObserver(policy, emit, getStage) {
  const nativeFetch = globalThis.fetch;
  let requests = 0,
    nextStart = 0;
  const evidence = new Map();
  globalThis.fetch = async (input, init = {}) => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.href
          : input.url;
    const method = (init.method ?? input?.method ?? "GET").toUpperCase();
    const stage = getStage();
    const headers = Object.fromEntries(
      [...new Headers(init.headers ?? input?.headers).entries()].map(
        ([key, value]) => [
          key,
          ["accept", "content-type", "user-agent", "range"].includes(key)
            ? value
            : "[REDACTED]",
        ],
      ),
    );
    for (let attempt = 0; ; attempt++) {
      if (++requests > policy.maxRequests)
        throw new PatrolError(
          "request_limit",
          `Request budget exceeded (${policy.maxRequests})`,
        );
      const requestId = `req-${requests}`;
      const wait = Math.max(0, nextStart - Date.now());
      nextStart = Math.max(nextStart, Date.now()) + policy.minRequestIntervalMs;
      if (wait) await delay(wait);
      const started = Date.now();
      const controller = new AbortController();
      const timer = setTimeout(
        () =>
          controller.abort(
            new PatrolError("timeout", "HTTP request timed out"),
          ),
        policy.requestTimeoutMs,
      );
      const signal = AbortSignal.any([
        controller.signal,
        ...(init.signal || input?.signal ? [init.signal ?? input.signal] : []),
      ]);
      emit({
        event: "http.request",
        stage,
        requestId,
        method,
        url,
        headers,
        attempt: attempt + 1,
      });
      let retryAfter = 0;
      try {
        const response = await nativeFetch(input, { ...init, signal });
        const declared = Number(response.headers.get("content-length"));
        if (declared > policy.maxResponseBytes) {
          await response.body?.cancel();
          throw new PatrolError(
            "response_limit",
            "Response exceeds byte limit",
          );
        }
        const chunks = [];
        let bytes = 0;
        const reader = response.body?.getReader();
        try {
          while (reader) {
            const { done, value } = await reader.read();
            if (done) break;
            bytes += value.byteLength;
            if (bytes > policy.maxResponseBytes) {
              await reader.cancel();
              throw new PatrolError(
                "response_limit",
                "Response exceeds byte limit",
              );
            }
            chunks.push(Buffer.from(value));
          }
        } finally {
          reader?.releaseLock();
        }
        const body = Buffer.concat(chunks);
        const category = httpCategory(
          response.status,
          body.subarray(0, 8192).toString(),
        );
        const event = {
          event: "http.response",
          stage,
          requestId,
          method,
          url,
          finalUrl: response.url,
          status: response.status,
          contentType: response.headers.get("content-type"),
          responseBytes: bytes,
          bodySha256: createHash("sha256").update(body).digest("hex"),
          durationMs: Date.now() - started,
          category,
          attempt: attempt + 1,
        };
        // Retain only the last request as classification evidence for this stage.
        evidence.set(stage, event);
        emit(event);
        const retry = method === "GET" || method === "HEAD";
        if (
          retry &&
          [429, 502, 503, 504].includes(response.status) &&
          attempt < policy.retries
        ) {
          const h = response.headers.get("retry-after");
          retryAfter = h
            ? Number.isFinite(Number(h))
              ? Number(h) * 1000
              : Date.parse(h) - Date.now()
            : 250 * 2 ** attempt;
        } else {
          const result = new Response(
            [101, 204, 205, 304].includes(response.status) || method === "HEAD"
              ? null
              : body,
            {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
            },
          );
          Object.defineProperty(result, "url", { value: response.url });
          Object.defineProperty(result, "redirected", {
            value: response.redirected,
          });
          return result;
        }
      } catch (error) {
        const category = controller.signal.aborted
          ? "timeout"
          : classify(error);
        evidence.set(stage, { category });
        emit({
          event: "http.error",
          stage,
          requestId,
          method,
          url,
          durationMs: Date.now() - started,
          category,
          error: String(error?.message ?? error),
          attempt: attempt + 1,
        });
        if (
          !["GET", "HEAD"].includes(method) ||
          attempt >= policy.retries ||
          !["network_error", "timeout", "dns_error"].includes(category)
        )
          throw error;
        retryAfter = 250 * 2 ** attempt;
      } finally {
        clearTimeout(timer);
      }
      await delay(
        Math.max(0, Math.min(retryAfter || 250, policy.requestTimeoutMs)),
      );
    }
  };
  return {
    evidence,
    restore() {
      globalThis.fetch = nativeFetch;
    },
  };
}
