import { ArgsErrorCodes } from "./args.errors";

interface ProcessedArgs {
  command: string;
  args: string[];
}

export default class ArgsProcessor {
  static getArgs(): ProcessedArgs {
    const args = process.argv.slice(2);

    if (args.length === 0) throw new Error(ArgsErrorCodes.NO_ARGS_PROVIDED);

    return { command: args[0], args: args.slice(1) };
  }
}
