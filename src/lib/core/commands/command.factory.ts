import Factory from "../common/factory";
import Config from "../config/config";
import { CommandErrorCodes } from "./command.errors";
import { Commands, ICommand } from "./command.types";
import { IMakeCommand, MakeCommand } from "./make";
import { ISketchCommand, SketchCommand } from "./sketch";

/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
  private static SketchCommand: ISketchCommand;
  private static MakeCommand: IMakeCommand;

  static getCommand(commandName: string): ICommand {
    if (commandName === Commands.SKETCH) return this.sketchCommand;
    if (commandName === Commands.MAKE) return this.makeCommand;
    else throw new Error(CommandErrorCodes.COMMAND_NOT_FOUND);
  }

  static get sketchCommand(): ISketchCommand {
    return this.resolve(this.SketchCommand, () => new SketchCommand(new Config()));
  }

  static get makeCommand(): IMakeCommand {
    return this.resolve(this.MakeCommand, () => new MakeCommand(new Config()));
  }
}
