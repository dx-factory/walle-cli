import Config from "../../config/config";
import { DepuratedMake, IMakeCommand } from "./make.types";
import { checkPathExists } from "../../common/file/reader";
import { Manual } from "../../config/config.types";
import ArgsProcessor from "../../args/args.processor";
import { createDirectory } from "../../common/file/writer";
import { IManualService } from "../../services/Manual/manual.types";
import { PrototypeService } from "../../services/Prototype/prototype.service";

export class MakeCommand implements IMakeCommand {
  constructor(private readonly manualService: IManualService, private readonly prototypeService: PrototypeService) {}

  private depurate(argsProp: string[]): DepuratedMake {
    const triggers = ArgsProcessor.getTriggersFromArgs(argsProp);
    const semantic = ArgsProcessor.filterSemanticFromArgs(argsProp);

    const [prototypeRef, name] = semantic.slice(-2);
    const existingPath = semantic.slice(0, -1).join("/");
    const customEntryPoint = `${Config.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);

    const prototype = this.prototypeService.getPrototype(prototypeRef);
    const manual = this.prototypeService.getPrototypeManual(prototypeRef);

    const validTriggers = this.manualService.containsTriggers(manual, triggers);
    if (!validTriggers) throw new Error(`Invalid triggers for manual ${prototype.manual}`);

    return { name, manual, triggers, entryPoint: customEntryPoint || Config.getEntryPoint() };
  }

  makePrototype(name: string, manual: Manual, triggers: string[], path: string): void {
    const craftFolder: boolean = manual.folder || false;
    if (craftFolder) createDirectory(`${path}`, name);
    const pathToCreate = craftFolder ? `${path}/${name}` : path;

    this.manualService.loadManualInstructions(manual, { path: pathToCreate, name, triggers });
  }

  execute(args: string[]): void {
    const { name, triggers, manual, entryPoint } = this.depurate(args);
    this.makePrototype(name, manual, triggers, entryPoint);
  }
}
