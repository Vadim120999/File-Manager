import crypto from "crypto";
import fs from "fs";
import path from "path";

export async function hashFile(filePath, currentDirectory) {
  const absolutePath = path.resolve(currentDirectory, filePath);
  try {
    const data = fs.readFileSync(absolutePath);
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(`Hash: ${hash}`);
  } catch (error) {
    console.log("Operation failed");
  }
}
