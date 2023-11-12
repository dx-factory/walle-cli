import { DepuratedMake, IMakeCommand } from "./make.types";
import { checkPathExists } from "../../common/utils/file/reader";

import ArgsProcessor from "../../args/args.processor";
import { createDirectory } from "../../common/utils/file/writer";
import { PrototypeService } from "../../services/prototype/prototype.service";
import { Spinner } from "../../../ui/components/Spinner/Spinner";
import { SeverityLevels } from "../../../ui/common/severity";
import { Logger } from "../../../ui/components/Logger/Logger";
import { ConfigService } from "../../services/config/config.service";
import { Manual } from "../../common/types/manual";
import { ManualService } from "../../services/manual";

export class MakeCommand implements IMakeCommand {
  constructor(
    private readonly manualService: ManualService,
    private readonly prototypeService: PrototypeService,
    private readonly configService: ConfigService,
  ) {}

  private depurate(argsProp: string[]): DepuratedMake {
    const triggers = ArgsProcessor.getTriggersFromArgs(argsProp);
    const semantic = ArgsProcessor.filterSemanticFromArgs(argsProp);

    const [prototypeRef, name] = semantic.slice(-2);

    const existingPath = semantic.slice(0, -1).join("/");
    const customEntryPoint = `${this.configService.getEntryPoint()}/${existingPath}`;
    if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);

    const prototype = this.prototypeService.getPrototype(prototypeRef);
    const manual = this.prototypeService.getPrototypeManual(prototypeRef);

    const validTriggers = this.manualService.containsTriggers(manual, triggers);
    if (!validTriggers) throw new Error(`Invalid triggers for manual ${prototype.manual}`);

    return { name, manual, triggers, entryPoint: customEntryPoint || this.configService.getEntryPoint() };
  }

  makePrototype(name: string, manual: Manual, triggers: string[], path: string): void {
    const craftFolder: boolean = manual.folder || false;
    if (craftFolder) createDirectory(`${path}`, name);
    const pathToCreate = craftFolder ? `${path}/${name}` : path;

    this.manualService.loadManualInstructions(manual, { path: pathToCreate, name, triggers });
  }

  async execute(args: string[]): Promise<void> {
    const { name, triggers, manual, entryPoint } = this.depurate(args);

    await Spinner.wait({
      startMessage: `Making ${manual.ref} ${name}`,
      stopMessage: `Prototype ${name} created!`,
      callback: () => this.makePrototype(name, manual, triggers, entryPoint),
    });

    Logger.note({ type: SeverityLevels.DEFAULT, title: "Next steps", message: `Start coding in ${entryPoint}/${name}` });
  }
}
