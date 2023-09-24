import Factory from "../common/utils/factory";
import { CommandErrorCodes } from "./command.errors";
import { ICommand } from "./command.types";
import { InitCommand, IInitCommand } from "./init";
import { IMakeCommand, MakeCommand } from "./make";
import { ISketchCommand, SketchCommand } from "./sketch";
import ServiceFactory from "../services/service.factory";
import { DesignCommand } from "./design/design.command";
import { FetchCommand } from "./fetch/fetch.command";

/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
  private static SketchCommand: ISketchCommand;
  private static MakeCommand: IMakeCommand;
  private static InitCommand: IInitCommand;
  private static DesignCommand: ICommand;
  private static FetchCommand: ICommand;

  static getCommand(commandName: string): ICommand {
    if (commandName === "sketch") return this.sketchCommand;
    if (commandName === "make") return this.makeCommand;
    if (commandName === "init") return this.initCommand;
    if (commandName === "design") return this.designCommand;
    if (commandName === "fetch") return this.fetchCommand;
    else throw new Error(CommandErrorCodes.COMMAND_NOT_FOUND);
  }

  static get sketchCommand(): ISketchCommand {
    return this.resolve(this.SketchCommand, () => new SketchCommand(ServiceFactory.getConfigService));
  }

  static get makeCommand(): IMakeCommand {
    return this.resolve(
      this.MakeCommand,
      () => new MakeCommand(ServiceFactory.getManualService, ServiceFactory.getPrototypeService, ServiceFactory.getConfigService),
    );
  }

  static get initCommand(): IInitCommand {
    return this.resolve(this.InitCommand, () => new InitCommand());
  }

  static get designCommand(): ICommand {
    return this.resolve(this.DesignCommand, () => new DesignCommand());
  }

  static get fetchCommand(): ICommand {
    return this.resolve(this.FetchCommand, () => new FetchCommand(ServiceFactory.getConfigService));
  }
}
