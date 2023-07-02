import Factory from "../common/factory";
import { CommandErrorCodes } from "./command.errors";
import { Commands } from "./command.types";
import MakeCommand from "./make/make.command";
import { IMakeCommand } from "./make/make.types";

/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
  private static MakeCommand: IMakeCommand;

  static commandByCommandName(commandName: string) {
    if (commandName === Commands.MAKE) return this.makeCommand;
    else throw new Error(CommandErrorCodes.COMMAND_NOT_FOUND);
  }

  static get makeCommand(): IMakeCommand {
    return this.resolve(this.MakeCommand, () => new MakeCommand());
  }
}
