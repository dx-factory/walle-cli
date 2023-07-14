import ArgsProcessor from "../../../args/args.processor";
import createArgsDecorator from "../../../common/decorators/ArgsDecorator";
import { Manual } from "../../../config/config.types";
import { checkPathExists } from "../../../file/reader";

export interface MakeArgs {
  name: string;
  manual: Manual;
  triggers: string[];
  entryPoint: string;
}
/**
 * Decorator to process make command arguments
 */
export function makeArgsPreprocessing(): MakeArgs {
  const args = process.argv.slice(2);

  const triggers = ArgsProcessor.getTriggersFromArgs(args);
  const semantic = ArgsProcessor.filterSemanticFromArgs(args);

  const [prototypeRef, name] = semantic.slice(-2);
  const existingPath = semantic.slice(0, -1).join("/");
  const customEntryPoint = `${this.config.getEntryPoint()}/${existingPath}`;
  if (!checkPathExists(customEntryPoint)) throw new Error(`Invalid path ${existingPath}`);

  const prototype = this.prototypeService.getPrototype(prototypeRef);
  const manual = this.prototypeService.getPrototypeManual(prototypeRef);

  const validTriggers = this.manualService.containsTriggers(manual, triggers);
  if (!validTriggers) throw new Error(`Invalid triggers for manual ${prototype.manual}`);

  return { name, manual, triggers, entryPoint: customEntryPoint || this.config.getEntryPoint() };
}

export const MakeArgsPreprocessing = createArgsDecorator(makeArgsPreprocessing);
