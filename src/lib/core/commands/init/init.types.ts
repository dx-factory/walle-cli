import { ICommand } from "../command.types";

export type IInitCommand = ICommand;

export interface DepuratedInitArgs {
  entryPoint: string;
}

export interface InitUserResponse {
  entryPoint: string;
  git: boolean;
}
