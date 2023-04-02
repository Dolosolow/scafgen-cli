import fs from "fs-extra";
import { logProgress } from "../utils/logProgress.js";
import { runCommand } from "../utils/runcommand.js";

export function createTailwindcssVite(build_name, path, build_path) {
  logProgress("info", "Creating a Vitejs + Tailwindcss + react-router-dom workspace");
  runCommand(`npm create vite@latest ${build_name} -- --template react-ts`);
  runCommand(`cd ${build_name} && yarn add -D -s path`);
  runCommand(`cd ${build_name} && yarn add -s react-router-dom`);

  logProgress("info", "adding tailwindcss\n", true);
  runCommand(`cd ${build_name} && yarn add -D -s tailwindcss postcss autoprefixer`);
  runCommand(`cd ${build_name} && npx tailwindcss init -p`);
  fs.copySync(`${path}/prebuilds/vitejs/vitejs-tailwindcss/build`, build_path, {
    overwrite: true,
  });
}
