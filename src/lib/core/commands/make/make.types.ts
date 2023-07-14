import { Manual } from "../../config/config.types";
import { ICommand } from "../command.types";

export interface IMakeCommand extends ICommand {}

export interface DepuratedMake {
  name: string;
  manual: Manual;
  triggers: string[];
  entryPoint: string;
}
