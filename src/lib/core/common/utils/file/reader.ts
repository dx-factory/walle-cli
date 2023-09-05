import * as fs from "fs";

export const checkPathExists = (path: string): boolean => {
  try {
    fs.accessSync(path);
    return true;
  } catch (error) {
    return false;
  }
};
