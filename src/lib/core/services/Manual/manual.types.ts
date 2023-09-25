import { Manual } from "../../common/types/manual";

export interface LoadManualInstructionsOptions {
  path: string;
  name: string;
  triggers?: string[];
  template?: string;
}

export interface IManualService {
  loadManualInstructions(manual: Manual, options: LoadManualInstructionsOptions): void;
  getManual(manualRef: string): Manual;
  containsTriggers(manual: Manual, triggers: string[]): boolean;
}
