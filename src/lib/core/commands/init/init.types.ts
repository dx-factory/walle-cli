import { ICommand } from "../command.types";

export interface IInitCommand extends ICommand {}

export interface DepuratedInitArgs {
  entryPoint: string;
}
