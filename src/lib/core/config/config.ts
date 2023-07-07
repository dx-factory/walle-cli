import * as fs from "fs";
import { WALLE_CONFIG_FILE_PATH } from "./config.constants";
import { Prototype } from "./config.types";

export default class Config {
  get(key: string): any {
    const config = JSON.parse(fs.readFileSync(WALLE_CONFIG_FILE_PATH, "utf8"));
    return config[key];
  }

  getPrototype(prototypeRef: string): Prototype {
    const prototypes = this.get("prototypes") as Prototype[];
    const prototype = prototypes.find((part: Prototype) => part.ref === prototypeRef);
    if (!prototype) throw new Error("Invalid prototype");
    return prototype;
  }

  getEntryPoint(): string {
    return this.get("entryPoint");
  }
}
