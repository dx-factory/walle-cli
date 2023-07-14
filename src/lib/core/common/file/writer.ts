import * as fs from "fs";

export const createDirectory = (path: string, name: string) => {
  const directoryPath = `${path}/${name}`;

  if (fs.existsSync(directoryPath)) {
    throw new Error(`Directory ${name} already exists in path ${path}.`);
  }

  fs.mkdirSync(directoryPath);
};

export const createFile = (path: string, name: string): void => {
  const filePath = `${path}/${name}`;

  if (fs.existsSync(filePath)) {
    throw new Error("File already exists.");
  }

  fs.writeFileSync(filePath, "");
};
