import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { parseArgs } from "node:util";
import path from "node:path";
import { archiveRun, buildSite } from "../src/archive.js";

const execute = promisify(execFile);
const { values } = parseArgs({
  options: {
    incoming: { type: "string" },
    worktree: { type: "string" },
    output: { type: "string" },
    limit: { type: "string", default: "90" },
    "build-only": { type: "boolean" },
  },
});
const git = (args, cwd = process.cwd()) => execute("git", args, { cwd });
const branch = "patrol-results";
let added = false;
try {
  if (
    (!values.incoming && !values["build-only"]) ||
    !values.worktree ||
    !values.output
  )
    throw Error("incoming, worktree and output are required");
  const worktree = path.resolve(values.worktree);
  let exists;
  try {
    await git(["ls-remote", "--exit-code", "--heads", "origin", branch]);
    exists = true;
  } catch (error) {
    if (error.code !== 2) throw error;
    exists = false;
  }
  if (exists) {
    await git(["fetch", "origin", branch]);
    await git(["worktree", "add", "--detach", worktree, "FETCH_HEAD"]);
  } else {
    await git(["worktree", "add", "--detach", worktree, "HEAD"]);
    await git(
      ["switch", "--orphan", `patrol-publish-${process.pid}`],
      worktree,
    );
  }
  added = true;
  if (!values["build-only"])
    await archiveRun(path.resolve(values.incoming), worktree, {
      limit: Number(values.limit),
    });
  await buildSite(worktree, path.resolve(values.output));
  if (!values["build-only"]) {
    await git(["add", "--", "index.json", "runs"], worktree);
    const { stdout: changes } = await git(
      ["diff", "--cached", "--name-only"],
      worktree,
    );
    if (changes.trim()) {
      await git(
        [
          "-c",
          "user.name=github-actions[bot]",
          "-c",
          "user.email=41898282+github-actions[bot]@users.noreply.github.com",
          "commit",
          "-m",
          "Update patrol history",
        ],
        worktree,
      );
      // Fast-forward only: a competing update fails safely rather than losing history.
      await git(["push", "origin", `HEAD:refs/heads/${branch}`], worktree);
    }
  }
} catch (error) {
  console.error("Could not publish patrol results:", error.message);
  process.exitCode = 1;
} finally {
  if (added)
    await git([
      "worktree",
      "remove",
      "--force",
      path.resolve(values.worktree),
    ]).catch(() => {});
}
