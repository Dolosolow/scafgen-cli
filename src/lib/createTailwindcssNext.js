import fs from "fs-extra";
import { logProgress } from "../utils/logProgress.js";
import { runCommand } from "../utils/runcommand.js";

export function createTailwindcssNext(build_name, path, build_path) {
  logProgress("info", "Creating a Nextjs + Tailwindcss workspace");
  logProgress("warn", "The following should be entered when answering the prompts below", true);
  logProgress("warn", "Project name should be the same as the value you entered above.");
  logProgress("warn", "Select yes to using 'src/' directory with your project.");
  logProgress(
    "warn",
    "Import alias should be left blank. It generates the alias in an unexpected way."
  );
  logProgress("info", "gen-scaffold will create alias for you.\n", true);
  runCommand(`yarn create next-app --typescript`);

  logProgress("info", "adding tailwindcss\n", true);
  runCommand(`cd ${build_name} && yarn add -D -s tailwindcss postcss autoprefixer`);
  runCommand(`cd ${build_name} && npx tailwindcss init -p`);
  fs.copySync(`${path}/prebuilds/nextjs/nextjs-tailwindcss/build`, build_path, {
    overwrite: true,
  });
}
