import * as fs from "fs";
import { WALLE_CONFIG_FILE_PATH } from "./config.constants";
import { Manual, Prototype } from "./config.types";

export default class Config {
  static get(key: string): any {
    const config = JSON.parse(fs.readFileSync(WALLE_CONFIG_FILE_PATH, "utf8"));
    return config[key];
  }

  static getPrototype(prototypeRef: string): Prototype {
    const prototypes = this.get("prototypes") as Prototype[];
    const prototype = prototypes.find((part: Prototype) => part.ref === prototypeRef);
    if (!prototype) throw new Error("Invalid prototype");
    return prototype;
  }

  static getManual(manualRef: string): Manual {
    const manuals = this.get("manuals") as Manual[];
    const manual = manuals.find((part: Manual) => part.ref === manualRef);
    if (!manual) throw new Error("Invalid manual");
    return manual;
  }

  static getEntryPoint(): string {
    return this.get("entryPoint");
  }
}
