import Factory from "../common/factory";
import Config from "../config/config";
import { CommandErrorCodes } from "./command.errors";
import { Commands, ICommand } from "./command.types";
import SketchCommand from "./sketch/sketch.command";
import { ISketchCommand } from "./sketch/sketch.types";

/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
  private static SketchCommand: ISketchCommand;

  static getCommand(commandName: string): ICommand {
    if (commandName === Commands.SKETCH) return this.sketchCommand;
    else throw new Error(CommandErrorCodes.COMMAND_NOT_FOUND);
  }

  static get sketchCommand(): ISketchCommand {
    return this.resolve(this.SketchCommand, () => new SketchCommand(new Config()));
  }
}
