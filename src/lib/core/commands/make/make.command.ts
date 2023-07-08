import Config from "../../config/config";
import { DepuratedMake, IMakeCommand } from "./make.types";
import { checkPathExists } from "../../common/file/reader";
import { Prototype } from "../../config/config.types";
import { DepuratedPrototypeSketch } from "../sketch";
import { createFile } from "../../file/writer";

export class MakeCommand implements IMakeCommand {
  constructor(private readonly config: Config) {}

  private depurate(args: string[]): DepuratedMake {
    if (args.length < 2) throw new Error("Invalid number of arguments");
    const [prototypeRef, name] = args.slice(-2);
    const existingPath = args.slice(0, -1).join("/");
    const customEntryPoint = `${this.config.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);
    const prototype = this.config.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    if (!prototype.extension) throw new Error(`Prototype missing extension`);
    return { name, extension: prototype.extension, entryPoint: customEntryPoint || this.config.getEntryPoint() };
  }

  makePrototype(name: string, extension: string, path: string): void {
    console.log("path", path);

    createFile(path, `${name}.${extension}`);
  }

  execute(args: string[]): void {
    const { name, extension, entryPoint } = this.depurate(args);
    this.makePrototype(name, extension, entryPoint);
  }
}
