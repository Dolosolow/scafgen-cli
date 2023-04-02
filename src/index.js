#!/usr/bin/env node
import { StartScript } from "./startScript.js";
import { logProgress } from "./utils/logProgress.js";
import { promptLibrary } from "./utils/promptLibrary.js";

const techChoices = {
  tech: { vitejs_react_ts: {}, nextjs_ts: {} },
  css: {
    bare: {},
    tailwindcss: {},
  },
};

logProgress(null, "Scaffold Generator\n", true);
const build = await promptLibrary(techChoices);

await StartScript({ build });
