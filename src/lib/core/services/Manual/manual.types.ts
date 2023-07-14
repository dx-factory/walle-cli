import { Manual } from "../../config/config.types";

export interface LoadManualInstructionsOptions {
  path: string;
  name: string;
  triggers?: string[];
  template?: true;
}

export interface IManualService {
  loadManualInstructions(manual: Manual, options: LoadManualInstructionsOptions): void;
  getManual(manualRef: string): Manual;
  containsTriggers(manual: Manual, triggers: string[]): boolean;
}
