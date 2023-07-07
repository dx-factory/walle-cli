import { createDirectory } from "../../common/file/writer";
import Config from "../../config/config";
import { Prototype } from "../../config/config.types";
import { DepuratedPrototypeSketch, ISketchCommand } from "./sketch.types";

export default class SketchCommand implements ISketchCommand {
  constructor(private readonly config: Config) {}

  private depurate(args: string[]): DepuratedPrototypeSketch {
    if (args.length !== 2) throw new Error("Invalid number of arguments");
    const [prototypeRef, name] = args;
    console.log(prototypeRef, name);

    const prototype = this.config.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    return { prototype, name };
  }

  private sketchPrototype(prototype: Prototype, name: string, path: string): void {
    const partsPathName = path === this.config.getEntryPoint() ? name : prototype.ref;
    const partsPath = `${path}/${partsPathName}`;
    createDirectory(path, partsPathName);
    if (!prototype?.parts || prototype?.parts?.length === 0) return;
    else {
      prototype.parts.forEach((part: Prototype["ref"]) => {
        this.sketchPrototype(this.config.getPrototype(part), name, partsPath);
      });
    }
  }

  execute(args: string[]): void {
    const { prototype, name } = this.depurate(args);
    this.sketchPrototype(prototype, name, this.config.getEntryPoint());
  }
}
