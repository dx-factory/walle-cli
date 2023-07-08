import * as fs from "fs";

export const createDirectory = (path: string, name: string): void => {
  const directoryPath = `${path}/${name}`;

  // Check if the directory already exists
  if (fs.existsSync(directoryPath)) {
    console.log("Directory already exists.");
    return;
  }

  // Create the directory
  fs.mkdirSync(directoryPath);

  console.log("Directory created successfully.");
};

export const createFile = (path: string, name: string, data = ""): void => {
  const filePath = `${path}/${name}`;

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    console.log("File already exists.");
    return;
  }

  // Create an empty file
  fs.writeFileSync(filePath, data);

  console.log("File created successfully.");
};
