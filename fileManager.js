import readline from "readline";
import os from "os";
import { changeDirectory } from "./commands/changeDirectory.js";
import { listDirectory } from "./commands/listDirectory.js";
import { fileOperations } from "./commands/fileOperations.js";
import { getOsInfo } from "./commands/osInfo.js";
import { hashFile } from "./commands/hashCalculator.js";
import { compressFile, decompressFile } from "./commands/compression.js";

let currentDirectory = os.homedir();

export function startFileManager(username) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const promptUser = () => {
    console.log(`You are currently in ${currentDirectory}`);
    rl.question("> ", async (input) => {
      const [command, ...args] = input.trim().split(" ");
      try {
        switch (command) {
          case "cd":
            changeDirectory(args[0], currentDirectory, (newDir) => {
              currentDirectory = newDir;
            });
            break;
          case "ls":
            await listDirectory(currentDirectory);
            break;
          case "cp":
            fileOperations("copy", args, currentDirectory);
            break;
          case "rn":
            fileOperations("rename", args, currentDirectory);
            break;
          case "rm":
            fileOperations("delete", args, currentDirectory);
            break;
          case "os":
            getOsInfo(args[0]);
            break;
          case "hash":
            await hashFile(args[0], currentDirectory);
            break;
          case "compress":
            await compressFile(args[0], args[1], currentDirectory);
            break;
          case "decompress":
            await decompressFile(args[0], args[1], currentDirectory);
            break;
          case ".exit":
            console.log(
              `Thank you for using File Manager, ${username}, goodbye!`
            );
            rl.close();
            process.exit();
          default:
            console.log("Invalid input");
        }
      } catch (error) {
        console.log("Operation failed");
      }
      promptUser();
    });
  };

  promptUser();
}
