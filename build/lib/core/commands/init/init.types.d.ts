import { ICommand } from "../command.types";
export type IInitCommand = ICommand;
export interface InitUserPreferences {
    entryPoint?: string;
    git?: boolean;
}
