import readline from "readline";
 import os from "os";
 import { changeDirectory } from "./commands/changeDirectory.js";
 import { listDirectory } from "./commands/listDirectory.js";
 
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