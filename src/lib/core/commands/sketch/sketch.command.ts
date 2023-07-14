import { SeverityLevels } from "../../../ui/common/severity";
import { Logger } from "../../../ui/components/Logger/Logger";
import { Spinner } from "../../../ui/components/Spinner/Spinner";
import { checkPathExists } from "../../common/file/reader";
import { createDirectory } from "../../common/file/writer";
import Config from "../../config/config";
import { Prototype } from "../../config/config.types";
import { DepuratedPrototypeSketch, ISketchCommand } from "./sketch.types";

export class SketchCommand implements ISketchCommand {
  constructor() {}

  private depurate(args: string[]): DepuratedPrototypeSketch {
    if (args.length < 2) throw new Error("Invalid number of arguments");
    const [prototypeRef, name] = args.slice(-2);
    const existingPath = args.slice(0, -2).join("/");
    const customEntryPoint = `${Config.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);
    const prototype = Config.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    return { prototype, name, entryPoint: customEntryPoint || Config.getEntryPoint() };
  }

  private sketchPrototype(prototype: Prototype, name: string, currentPath: string, initPath = Config.getEntryPoint()): void {
    const partsPathName = currentPath === initPath ? name : prototype.ref;
    const partsPath = `${currentPath}/${partsPathName}`;
    createDirectory(currentPath, partsPathName);
    if (!prototype?.parts || prototype?.parts?.length === 0) return;
    else {
      prototype.parts.forEach((part: Prototype["ref"]) => {
        this.sketchPrototype(Config.getPrototype(part), name, partsPath);
      });
    }
  }

  async execute(args: string[]): Promise<void> {
    const { prototype, name, entryPoint } = this.depurate(args);
    await Spinner.wait({
      startMessage: `Sketching ${prototype.ref} ${name}`,
      stopMessage: `Sketched!`,
      callback: () => this.sketchPrototype(prototype, name, entryPoint, entryPoint),
    });
    Logger.note({ type: SeverityLevels.DEFAULT, title: "Next steps", message: `Find your sketched prototype in ${entryPoint}${name}` });
  }
}
