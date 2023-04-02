import { createBareVite } from "../lib/createBareVite.js";
import { createTailwindcssVite } from "../lib/createTailwindcssVite.js";
import { logProgress } from "./logProgress.js";

export function createBuild(build, path, build_path) {
  switch (build.tech) {
    case "vitejs_react_ts":
      if (build.css === "tailwindcss") {
        createTailwindcssVite(build.name, path, build_path);
      } else {
        createBareVite(build.name, path, build_path);
      }
      logProgress("success", "workspace created", true);
      return;
    case "nextjs_ts":
      logProgress(
        "warn",
        "This currently does not support Nextjs builds. Choose a different build."
      );
      process.exit(1);
  }
}
