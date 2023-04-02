import fs from "fs-extra";
import { logProgress } from "../utils/logProgress.js";
import { runCommand } from "../utils/runcommand.js";

export function createBareVite(build_name, path, build_path) {
  logProgress("info", "Creating a bare Vitejs + react-router-dom workspace");
  runCommand(`npm create vite@latest ${build_name} -- --template react-ts`);
  runCommand(`cd ${build_name} && yarn add -D -s path`);
  runCommand(`cd ${build_name} && yarn add -s react-router-dom`);
  fs.copySync(`${path}/prebuilds/vitejs/vitejs-bare/build`, build_path, {
    overwrite: true,
  });
}
