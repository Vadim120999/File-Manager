import { startFileManager } from "./fileManager.js";

const args = process.argv.slice(2);
const usernameArg = args.find((arg) => arg.startsWith("--username="));
const username = usernameArg ? usernameArg.split("=")[1] : "User";

console.log(`Welcome to the File Manager, ${username}!`);

startFileManager(username);

process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
