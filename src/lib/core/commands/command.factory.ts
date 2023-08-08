import Factory from "../common/factory";

import { PrototypeService } from "../services/Prototype/prototype.service";
import { CommandErrorCodes } from "./command.errors";
import { Commands, ICommand } from "./command.types";
import { InitCommand, IInitCommand } from "./init";
import { IMakeCommand, MakeCommand } from "./make";
import { ISketchCommand, SketchCommand } from "./sketch";
import { ManualService } from "../services/Manual/manual.service";

/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
  private static SketchCommand: ISketchCommand;
  private static MakeCommand: IMakeCommand;
  private static InitCommand: IInitCommand;

  static getCommand(commandName: string): ICommand {
    if (commandName === Commands.SKETCH) return this.sketchCommand;
    if (commandName === Commands.MAKE) return this.makeCommand;
    if (commandName === Commands.INIT) return this.initCommand;
    else throw new Error(CommandErrorCodes.COMMAND_NOT_FOUND);
  }

  static get sketchCommand(): ISketchCommand {
    return this.resolve(this.SketchCommand, () => new SketchCommand());
  }

  static get makeCommand(): IMakeCommand {
    return this.resolve(this.MakeCommand, () => new MakeCommand(new ManualService(), new PrototypeService()));
  }

  static get initCommand(): IInitCommand {
    return this.resolve(this.InitCommand, () => new InitCommand());
  }
}
