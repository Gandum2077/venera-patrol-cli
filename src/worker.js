import { inspectSource } from "./engine.js";
import { createRedactor, sanitizeEvent } from "./redact.js";
import { resolveSourceSettings } from "./config.js";
process.once("message", async (job) => {
  let redact = createRedactor(job.settings);
  const send = (event) => {
    if (process.connected) process.send(sanitizeEvent(event, redact));
  };
  job.resolveSettings = (key) => {
    const settings = resolveSourceSettings(
      job.sourceSettings[key] ?? job.settings,
    );
    redact = createRedactor(settings);
    return settings;
  };
  try {
    await inspectSource(job, send);
  } catch (error) {
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
