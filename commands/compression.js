import { createGzip, createGunzip } from "zlib";
import fs from "fs";
import path from "path";

export async function compressFile(source, destination, currentDirectory) {
  const sourcePath = path.resolve(currentDirectory, source);
  const destinationPath = path.resolve(currentDirectory, destination);
  try {
    const input = fs.createReadStream(sourcePath);
    const output = fs.createWriteStream(destinationPath);
    const gzip = createGzip();

    input.pipe(gzip).pipe(output);
    console.log("File compressed successfully");
  } catch (error) {
    console.log("Operation failed");
  }
}

export async function decompressFile(source, destination, currentDirectory) {
  const sourcePath = path.resolve(currentDirectory, source);
  const destinationPath = path.resolve(currentDirectory, destination);
  try {
    const input = fs.createReadStream(sourcePath);
    const output = fs.createWriteStream(destinationPath);
    const gunzip = createGunzip();

    input.pipe(gunzip).pipe(output);
    console.log("File decompressed successfully");
  } catch (error) {
    console.log("Operation failed");
  }
}
