interface ProcessedArgs {
    command: string;
    args: string[];
}
export default class ArgsProcessor {
    static getArgs(): ProcessedArgs;
    static filterSemanticFromArgs(args: string[]): string[];
    static getTriggersFromArgs(args: string[]): string[];
}
export {};
