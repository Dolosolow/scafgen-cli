import { execSync } from "child_process";
import { logProgress } from "./logProgress.js";

export function runCommand(command) {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    logProgress("warn", `Failed to execute ${command}`);
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
}
