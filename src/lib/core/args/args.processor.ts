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

  static filterSemanticFromArgs(args: string[]): string[] {
    const semantic = args.filter((arg: string) => !arg.startsWith("-"));
    if (!semantic || semantic.length < 2) throw new Error(ArgsErrorCodes.NO_SEMANTIC_PROVIDED);
    return semantic;
  }

  static getTriggersFromArgs(args: string[]): string[] {
    return args.filter((arg: string) => arg.startsWith("-")).map((arg: string) => arg.slice(1));
  }
}
