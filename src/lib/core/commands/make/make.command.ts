import Config from "../../config/config";
import { DepuratedMake, IMakeCommand } from "./make.types";
import { checkPathExists } from "../../common/file/reader";
import { Instruction, Manual, Prototype } from "../../config/config.types";
import { createFile } from "../../file/writer";
import ArgsProcessor from "../../args/args.processor";
import { createDirectory } from "../../common/file/writer";

export class MakeCommand implements IMakeCommand {
  constructor(private readonly config: Config) {}

  private depurate(argsProp: string[]): DepuratedMake {
    const triggers = ArgsProcessor.getTriggersFromArgs(argsProp);
    const semantic = ArgsProcessor.filterSemanticFromArgs(argsProp);

    const [prototypeRef, name] = semantic.slice(-2);
    const existingPath = semantic.slice(0, -1).join("/");
    const customEntryPoint = `${this.config.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);

    const prototype = this.config.getPrototype(prototypeRef);
    if (!prototype.manual) throw new Error(`Prototype missing manual`);

    // Verify that triggers are included in manual instructions
    const manual = this.config.getManual(prototype.manual);
    if (typeof manual.instructions === "string") throw new Error(`Invalid manual instructions`);

    const manualTriggers = manual.instructions.map((instruction) => instruction.trigger);

    const missingTriggers = triggers.filter((trigger) => !manualTriggers.includes(trigger));
    if (missingTriggers.length > 0) throw new Error(`Invalid triggers ${missingTriggers.join(", ")}`);
    return { name, manual, triggers: triggers, entryPoint: customEntryPoint || this.config.getEntryPoint() };
  }

  makePrototype(name: string, manual: Manual, triggers: string[], path: string): void {
    const craftFolder: boolean = manual.folder || false;

    if (craftFolder) createDirectory(`${path}`, name);

    const pathToCreate = craftFolder ? `${path}/${name}` : path;
    if (typeof manual.instructions === "string") createFile(`${pathToCreate}/${name}.${manual.instructions}`, "");
    if (manual.instructions instanceof Array) {
      triggers.forEach((trigger) => {
        const instructions = manual.instructions as Instruction[];
        const instruction = instructions.find((instruction) => instruction.trigger === trigger);
        if (!instruction) throw new Error(`Instruction not found for trigger ${trigger}`);
        const { extension, preffix: suffix, name: fileName } = instruction;
        createFile(pathToCreate, `${fileName || name}${suffix ? `.${suffix}` : ""}.${extension}`, "");
      });
      manual.instructions.forEach(({ extension, name: fileName, trigger }) => {
        if (!trigger) {
          createFile(pathToCreate, `${fileName || name}.${extension}`, "");
        }
      });
    }
  }

  execute(args: string[]): void {
    const { name, triggers, manual, entryPoint } = this.depurate(args);
    this.makePrototype(name, manual, triggers, entryPoint);
  }
}
