import * as fs from "fs";
import { WALLE_CONFIG_FILE_PATH } from "./config.constants";
import { Part, Prototype } from "./config.types";

export default class Config {
  get(key: string): any {
    const config = JSON.parse(fs.readFileSync(WALLE_CONFIG_FILE_PATH, "utf8"));
    return config[key];
  }

  getPart(partName: string): Part | undefined {
    const parts = this.get("parts") as Part[];
    return parts.find((part: Part) => part.name === partName);
  }

  getPrototype(prototypeName: string): Prototype | undefined {
    const prototypes = this.get("prototypes") as Prototype[];
    return prototypes.find((part: Prototype) => part.name === prototypeName);
  }
}
