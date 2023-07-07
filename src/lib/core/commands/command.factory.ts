import Factory from "../common/factory";
import Config from "../config/config";
import { CommandErrorCodes } from "./command.errors";
import { Commands } from "./command.types";
import SketchCommand from "./sketch/sketch.command";
import { ISketchCommand } from "./sketch/sketch.types";

/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
  private static SketchCommand: ISketchCommand;

  static commandByCommandName(commandName: string) {
    if (commandName === Commands.SKETCH) return this.SketchCommand;
    else throw new Error(CommandErrorCodes.COMMAND_NOT_FOUND);
  }

  static get sketchCommand(): ISketchCommand {
    return this.resolve(this.SketchCommand, () => new SketchCommand(new Config()));
  }
}
