import { checkPathExists } from "../../file/reader";
import { IInitCommand } from "./init.types";
import InitChainFactory from "./flows/InitChain.factory";
import { WALLE_CONFIG_FILENAME } from "../../services/config/config.constants";

export class InitCommand implements IInitCommand {
  constructor() {}

  private configFileExists(): boolean {
    return checkPathExists(`${process.cwd()}/${WALLE_CONFIG_FILENAME}`);
  }

  async execute(): Promise<void> {
    if (this.configFileExists()) throw new Error("Config file already exists");
    const userSelection = await InitChainFactory.getUserPreferencesChain.execute();
    await InitChainFactory.setUserPreferencesChain.execute(userSelection);
  }
}
