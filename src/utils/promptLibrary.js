import inquirer from "inquirer";
/**
 * User prompts to generate the build config.
 * @returns a build config.
 */
export async function promptLibrary(options) {
  let currentBuild = {};

  const projectName = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter project/repo name:",
  });
  if (!projectName.name) {
    return promptLibrary();
  }
  currentBuild = { ...currentBuild, name: projectName.name };

  const feTech = await inquirer.prompt({
    name: "library",
    type: "list",
    message: "Select a library:",
    choices: Object.keys(options.tech),
  });
  currentBuild["tech"] = feTech.library;

  const cssTech = await inquirer.prompt({
    name: "css",
    type: "list",
    message: "Select a css solution:",
    choices: Object.keys(options.css),
  });
  currentBuild["css"] = cssTech.css;

  console.log("\n");

  return currentBuild;
}
