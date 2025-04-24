import fs from "fs";
import path from "path";

export function fileOperations(operation, args, currentDirectory) {
  const [source, destination] = args.map((arg) =>
    path.resolve(currentDirectory, arg)
  );
  try {
    switch (operation) {
      case "copy":
        fs.copyFileSync(source, destination);
        console.log("File copied successfully");
        break;
      case "rename":
        fs.renameSync(source, destination);
        console.log("File rename successfully");
        break;
      case "delete":
        fs.unlinkSync(source);
        console.log("File deleted successfully");
        break;
      default:
        console.log("Invalid file operation");
    }
  } catch (error) {
    console.log("Operation failed");
  }
}
