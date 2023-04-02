import chalk from "chalk";
/**
 * This a more custom version of logging to the console. With the help of 'chalk' this shows nice and clear progress logs
 */
export function logProgress(type, message, newLine = false) {
  switch (type) {
    // display info log
    case "info":
      console.log(
        `${newLine ? "\n" : ""}${chalk.bgBlue("info")}: ${chalk.whiteBright(`${message}`)}`
      );
      return;
    // display warning log
    case "warn":
      console.log(
        `${newLine ? "\n" : ""}${chalk.bgYellow("warning")}: ${chalk.whiteBright(`${message}`)}`
      );
      return;
    // display success log
    case "success":
      console.log(
        `${newLine ? "\n" : ""}${chalk.bgGreen("success")}: ${chalk.whiteBright(`${message} ✅`)}`
      );
      return;
    // display default log
    default:
      console.log(`${newLine ? "\n" : ""}${chalk.cyan(`${message}`)}`);
      return;
  }
}
