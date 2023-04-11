import fs from "fs-extra";
import { logProgress } from "../utils/logProgress.js";
import { runCommand } from "../utils/runcommand.js";

export function createBareNext(path, build_path) {
  logProgress("info", "Creating a Nextjs workspace");
  logProgress("warn", "The following should be entered when answering the prompts below", true);
  logProgress("warn", "Project name should be the same as the value you entered above.");
  logProgress("warn", "Select yes to using 'src/' directory with your project.");
  logProgress("warn", "Import alias just add '@component/*'. Needed to continue.");
  logProgress("info", "gen-scaffold will create alias for you.\n", true);
  runCommand(`npx create-next-app@latest --typescript`);

  fs.copySync(`${path}/prebuilds/nextjs/nextjs-bare/build`, build_path, {
    overwrite: true,
  });
}
