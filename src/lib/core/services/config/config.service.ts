import * as fs from "fs";

import { WALLE_CONFIG_DEFAULT_STATE, WALLE_CONFIG_FILENAME, WALLE_CONFIG_FILE_PATH } from "./config.constants";
import { WalleConfig, WalleConfigKey } from "../../common/types/config";
import { Prototype } from "../../common/types/prototype";
import { Manual } from "../../common/types/manual";
import { addTextToFile, checkPathExists } from "../../file/reader";
import { createFile } from "../../file/writer";

export class ConfigService {
  getConfig(): WalleConfig {
    const config = JSON.parse(fs.readFileSync(WALLE_CONFIG_FILE_PATH, "utf8")) as WalleConfig;
    return config;
  }

  saveConfig(configState: WalleConfig) {
    fs.writeFileSync(WALLE_CONFIG_FILE_PATH, JSON.stringify(configState, null, 2));
  }

  get(key: WalleConfigKey): any {
    const config = this.getConfig();
    return config[key];
  }

  set(key: WalleConfigKey, value: any): void {
    const config = this.getConfig();
    config[key] = value;
    this.saveConfig(config);
  }

  validate(config: object): boolean {
    const configKeys = Object.keys(config);
    const validKeys = Object.keys(WALLE_CONFIG_DEFAULT_STATE);
    return configKeys.every((key: string) => validKeys.includes(key));
  }

  getPrototype(prototypeRef: string): Prototype {
    const prototypes = this.get("prototypes") as Prototype[];
    const prototype = prototypes.find((part: Prototype) => part.ref === prototypeRef);
    if (!prototype) throw new Error("Invalid prototype");
    return prototype;
  }

  getManual(manualRef: string): Manual {
    const manuals = this.get("manuals") as Manual[];
    const manual = manuals.find((part: Manual) => part.ref === manualRef);
    if (!manual) throw new Error("Invalid manual");
    return manual;
  }

  setManual(manual: Manual): void {
    const manuals = this.get("manuals") as Manual[];
    this.set("manuals", [...manuals, manual]);
  }

  setPrototype(prototype: Prototype): void {
    const prototypes = this.get("prototypes") as Prototype[];
    this.set("prototypes", [...prototypes, prototype]);
  }

  getEntryPoint(): string {
    return this.get("entryPoint");
  }

  setEntryPoint(entryPoint: string): void {
    const existsConfig = checkPathExists(WALLE_CONFIG_FILE_PATH);
    if (!existsConfig) createFile(".", WALLE_CONFIG_FILENAME, JSON.stringify(WALLE_CONFIG_DEFAULT_STATE, null, 2));
    this.set("entryPoint", entryPoint);
  }

  ignoreConfigFile(ignore: boolean): void {
    if (!ignore) return;
    const gitIgnoreExists = checkPathExists("./.gitignore");
    if (gitIgnoreExists) addTextToFile(".gitignore", WALLE_CONFIG_FILENAME);
    else throw new Error("Gitignore file not found");
  }

  getTemplate(templateRef: string): string {
    if (!checkPathExists(`./.walle/templates/${templateRef}.txt`)) throw new Error("Template not found");

    return fs.readFileSync(`./.walle/templates/${templateRef}.txt`, "utf8");
  }
}
