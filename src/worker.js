import { inspectSource } from "./engine.js";
import { createRedactor, sanitizeEvent } from "./redact.js";
import { resolveSourceSettings } from "./config.js";
process.once("message", async (job) => {
  let redact = createRedactor(job.settings);
  const send = (event) => {
    if (process.connected) process.send(sanitizeEvent(event, redact));
  };
  if (job.authStateSync) {
    let sequence = 0;
    job.checkpoint = () => new Promise((resolve, reject) => {
      const id = ++sequence;
      const listener = (message) => {
        if (message.kind !== "auth.saved" || message.id !== id) return;
        process.off("message", listener);
        if (message.failed) reject(Object.assign(new Error("Could not persist PATROL_AUTH_STATE"), { category: "auth_state_sync_failed" }));
        else resolve();
      };
      process.on("message", listener);
      process.send({ kind: "auth.checkpoint", id });
    });
  }
  const privateValues = new Set();
  let resolvedSettings = job.settings;
  job.registerPrivateData = (data) => {
    const collect = (value) => {
      if (typeof value === "string" && value) privateValues.add(value);
      else if (value && typeof value === "object") Object.values(value).forEach(collect);
    };
    collect(data);
    redact = createRedactor({ settings: resolvedSettings, data: [...privateValues] });
  };
  job.resolveSettings = (key) => {
    const settings = resolveSourceSettings(
      job.sourceSettings[key] ?? job.settings,
    );
    resolvedSettings = settings;
    redact = createRedactor(settings);
    return settings;
  };
  try {
    await inspectSource(job, send);
  } catch (error) {
    if (error.category === "auth_state_sync_failed") return;
    send({
      kind: "fatal",
      error: {
        message: error.message ?? String(error),
        category: error.category ?? "worker_error",
      },
    });
  } finally {
    if (process.connected)
      process.send({ kind: "done" }, () => process.exit(0));
    else process.exit(0);
  }
});
