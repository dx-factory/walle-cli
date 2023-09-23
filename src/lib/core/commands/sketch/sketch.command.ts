import { SeverityLevels } from "../../../ui/common/severity";
import { Logger } from "../../../ui/components/Logger/Logger";
import { Spinner } from "../../../ui/components/Spinner/Spinner";
import { Prototype } from "../../common/types/prototype";
import { checkPathExists } from "../../common/utils/file/reader";
import { createDirectory } from "../../common/utils/file/writer";
import { ConfigService } from "../../services/config/config.service";

import { DepuratedPrototypeSketch, ISketchCommand } from "./sketch.types";

export class SketchCommand implements ISketchCommand {
  constructor(private readonly configService: ConfigService) {}

  private depurate(args: string[]): DepuratedPrototypeSketch {
    if (args.length < 1) throw new Error("Invalid number of arguments");
    const [prototypeRef, name] = args.slice(-2);
    const existingPath = args.slice(0, -2).join("/");
    const customEntryPoint = `${this.configService.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);
    const prototype = this.configService.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    if ((!prototype?.parts || prototype?.parts?.length === 0) && name) throw new Error(`Cannot name a prototype without parts`);
    return { prototype, name: name || prototypeRef, entryPoint: customEntryPoint || this.configService.getEntryPoint() };
  }

  private sketchPrototype(prototype: Prototype, name: string, currentPath: string, initPath = this.configService.getEntryPoint()): void {
    const partsPathName = currentPath === initPath ? name : prototype.ref;
    const partsPath = `${currentPath}/${partsPathName}`;
    createDirectory(currentPath, partsPathName);
    if (!prototype?.parts || prototype?.parts?.length === 0) return;
    else {
      prototype.parts.forEach((part: Prototype["ref"]) => {
        this.sketchPrototype(this.configService.getPrototype(part), name, partsPath);
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
