import { createBareVite } from "../lib/createBareVite.js";
import { createBareNext } from "../lib/createBareNext.js";
import { createTailwindcssVite } from "../lib/createTailwindcssVite.js";
import { createTailwindcssNext } from "../lib/createTailwindcssNext.js";
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
      if (build.css === "tailwindcss") {
        createTailwindcssNext(build.name, path, build_path);
      } else {
        createBareNext(path, build_path);
      }
      return;
    default:
      process.exit(1);
  }
}
