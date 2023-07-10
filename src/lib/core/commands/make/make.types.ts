import { Manual } from "../../config/config.types";

export interface IMakeCommand {
  execute(args: string[]): void;
}

export interface DepuratedMake {
  name: string;
  manual: Manual;
  triggers: string[];
  entryPoint: string;
}
