import fs from "fs-extra";
import path from "path";
import { createBuild } from "./utils/createBuild.js";
import { logProgress } from "./utils/logProgress.js";
/**
 * Starts the cli and generates a boilerplate build based off the build config given
 */
export async function StartScript({ build }) {
  const globalDir = process.cwd();
  const [, workingDir] = process.argv;

  const installationPath = path.join(`${workingDir}`, "/../../", "scaffold-cli-web", "src");
  const buildPath = `${globalDir}/${build.name}`;

  createBuild(build, installationPath, buildPath);
  logProgress("info", `Copying ${build.tech} folders and files`, true);

  logProgress("info", `Copying shared folders`);
  fs.copySync(`${installationPath}/prebuilds/shared`, `${buildPath}/src`, { overwrite: false });

  logProgress("success", `Build complete and can be found at ${buildPath}`, true);
  logProgress("success", "Scaffolding complete", true);
}
