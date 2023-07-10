import * as fs from "fs";

export const createDirectory = (path: string, name: string): void => {
  const directoryPath = `${path}/${name}`;

  // Check if the directory already exists
  if (fs.existsSync(directoryPath)) {
    return;
  }

  // Create the directory
  fs.mkdirSync(directoryPath);
};

export const createFile = (path: string, name: string, data = ""): void => {
  const filePath = `${path}/${name}`;

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    return;
  }

  // Create an empty file
  fs.writeFileSync(filePath, data);
};
