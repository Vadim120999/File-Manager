import fs from "fs";
 
 export async function listDirectory(directory) {
   try {
     const files = await fs.promises.readdir(directory);
     console.log(files.join("\n"));
   } catch (error) {
     console.log("Operation failed");
   }
 }