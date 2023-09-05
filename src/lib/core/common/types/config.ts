import { Manual } from "./manual";
import { Prototype } from "./prototype";

export interface WalleConfig {
  entryPoint: string;
  prototypes: Prototype[];
  manuals: Manual[];
}

export type WalleConfigKey = keyof WalleConfig;
