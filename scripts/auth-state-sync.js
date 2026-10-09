import { spawn } from "node:child_process";

// The payload is supplied over stdin, never command arguments or logs.
export async function writeGithubAuthState(state, {
  token = process.env.PATROL_AUTH_WRITE_TOKEN,
  repository = process.env.GITHUB_REPOSITORY,
  spawnCommand = spawn,
} = {}) {
  if (!token || !repository)
    throw new Error("PATROL_AUTH_WRITE_TOKEN and GITHUB_REPOSITORY are required for authentication state sync");
  const payload = JSON.stringify(state);
  if (Buffer.byteLength(payload) > 48 * 1024)
    throw new Error("PATROL_AUTH_STATE exceeds GitHub Secret size limit");
  await new Promise((resolve, reject) => {
    const child = spawnCommand("gh", ["secret", "set", "PATROL_AUTH_STATE", "--repo", repository], {
      env: { ...process.env, GH_TOKEN: token },
      stdio: ["pipe", "ignore", "ignore"],
    });
    const timer = setTimeout(() => child.kill("SIGKILL"), 20000);
    const fail = () => reject(new Error("Could not update GitHub Secret PATROL_AUTH_STATE; check writer permissions"));
    child.once("error", () => { clearTimeout(timer); fail(); });
    child.once("close", (code) => { clearTimeout(timer); code === 0 ? resolve() : fail(); });
    child.stdin.on("error", () => {});
    child.stdin.end(payload);
  });
}
