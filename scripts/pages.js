import { parseArgs } from "node:util";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { buildSite, exportPublicRun, archiveRun } from "../src/archive.js";
import { readConfig } from "../src/config.js";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    history: { type: "string", default: ".patrol-history" },
    output: { type: "string", default: "site-dist" },
    report: { type: "string" },
    config: { type: "string", default: "patrol.config.json" },
    limit: { type: "string", default: "90" },
  },
});
try {
  if (positionals[0] === "archive") {
    if (!values.report) throw Error("Provide --report <report.json>");
    const config = await readConfig(values.config);
    const staging = await mkdtemp(path.join(tmpdir(), "patrol-public-"));
    try {
      await exportPublicRun(path.resolve(values.report), staging, {
        config,
        metadata: { trigger: "local" },
      });
      await archiveRun(staging, path.resolve(values.history), {
        limit: Number(values.limit),
      });
    } finally {
      await rm(staging, { recursive: true, force: true });
    }
  } else if (positionals[0] === "build")
    console.log(await buildSite(values.history, values.output));
  else throw Error("Use pages.js build or archive");
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
