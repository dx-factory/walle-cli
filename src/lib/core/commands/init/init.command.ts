import { Selector } from "../../../ui/components/Selector/Selector";
import { TextField } from "../../../ui/components/TextField/TextField";
import { WALLE_CONFIG_FILENAME } from "../../config/config.constants";
import { checkPathExists } from "../../file/reader";
import { GITIGNORE_QUESTION, PROJECT_ENTRYPOINT_QUESTION } from "./init.constants";
import { IInitCommand, InitUserResponse } from "./init.types";
import { InitUserResponseFlow } from "./flows/UserResponseFlow";

export class InitCommand implements IInitCommand {
  constructor() {}

  private configFileExists(): boolean {
    return checkPathExists(`${process.cwd()}/${WALLE_CONFIG_FILENAME}`);
  }

  async execute(): Promise<void> {
    if (this.configFileExists()) throw new Error("Config file already exists");
    const userSelection = await InitUserResponseFlow.execute();
    console.log(userSelection);

    // createFile(process.cwd(), WALLE_CONFIG_FILENAME, JSON.stringify({ entryPoint: `./${entryPoint}` }, null, 4));
  }
}
