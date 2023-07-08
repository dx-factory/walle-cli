import { checkPathExists } from "../../common/file/reader";
import { createDirectory } from "../../common/file/writer";
import Config from "../../config/config";
import { Prototype } from "../../config/config.types";
import { DepuratedPrototypeSketch, ISketchCommand } from "./sketch.types";

export default class SketchCommand implements ISketchCommand {
  constructor(private readonly config: Config) {}

  private depurate(args: string[]): DepuratedPrototypeSketch {
    if (args.length < 2) throw new Error("Invalid number of arguments");
    const [prototypeRef, name] = args.slice(-2);
    console.log(prototypeRef, name);
    const existingPath = args.slice(0, -2).join("/");
    const customEntryPoint = `${this.config.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);
    const prototype = this.config.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    return { prototype, name, entryPoint: customEntryPoint || this.config.getEntryPoint() };
  }

  private sketchPrototype(prototype: Prototype, name: string, currentPath: string, initPath = this.config.getEntryPoint()): void {
    const partsPathName = currentPath === initPath ? name : prototype.ref;
    const partsPath = `${currentPath}/${partsPathName}`;
    createDirectory(currentPath, partsPathName);
    if (!prototype?.parts || prototype?.parts?.length === 0) return;
    else {
      prototype.parts.forEach((part: Prototype["ref"]) => {
        this.sketchPrototype(this.config.getPrototype(part), name, partsPath);
      });
    }
  }

  execute(args: string[]): void {
    const { prototype, name, entryPoint } = this.depurate(args);
    this.sketchPrototype(prototype, name, entryPoint, entryPoint);
  }
}
