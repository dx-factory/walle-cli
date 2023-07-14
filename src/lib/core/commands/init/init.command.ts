import { WALLE_CONFIG_FILENAME } from "../../config/config.constants";
import { checkPathExists } from "../../file/reader";
import { createFile } from "../../file/writer";
import { DepuratedInitArgs, IInitCommand } from "./init.types";

export class InitCommand implements IInitCommand {
  constructor() {}

  private depurate(args: string[]): DepuratedInitArgs {
    if (args.length !== 1) throw new Error("Invalid number of arguments");
    const [entryPoint] = args;
    return { entryPoint };
  }

  private configFileExists(): boolean {
    return checkPathExists(`${process.cwd()}/${WALLE_CONFIG_FILENAME}`);
  }

  async execute(args: string[]): Promise<void> {
    const { entryPoint } = this.depurate(args);
    if (this.configFileExists()) throw new Error("Config file already exists");
    createFile(process.cwd(), WALLE_CONFIG_FILENAME, JSON.stringify({ entryPoint: `./${entryPoint}` }, null, 4));
  }
}
