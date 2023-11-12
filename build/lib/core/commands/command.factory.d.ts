import Factory from "../common/utils/factory";
import { ICommand } from "./command.types";
import { IInitCommand } from "./init";
import { IMakeCommand } from "./make";
import { ISketchCommand } from "./sketch";
/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
export default class CommandFactory extends Factory {
    private static SketchCommand;
    private static MakeCommand;
    private static InitCommand;
    private static DesignCommand;
    private static FetchCommand;
    static getCommand(commandName: string): ICommand;
    static get sketchCommand(): ISketchCommand;
    static get makeCommand(): IMakeCommand;
    static get initCommand(): IInitCommand;
    static get designCommand(): ICommand;
    static get fetchCommand(): ICommand;
}
