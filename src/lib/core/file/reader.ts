import * as fs from "fs";

export const checkPathExists = (path: string): boolean => {
  try {
    fs.accessSync(path);
    return true;
  } catch (error) {
    return false;
  }
};

export const addTextToFile = (path: string, text: string): void => {
  try {
    fs.appendFileSync(path, text);
  } catch (error) {
    throw new Error("Error writing to file");
  }
};
