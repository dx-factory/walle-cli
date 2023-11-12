import { Manual } from "../../../services/config/config.types";
export interface MakeArgs {
    name: string;
    manual: Manual;
    triggers: string[];
    entryPoint: string;
}
/**
 * Decorator to process make command arguments
 */
export declare function makeArgsPreprocessing(): MakeArgs;
export declare const MakeArgsPreprocessing: Function;
