import { IInitCommand } from "./init.types";
export declare class InitCommand implements IInitCommand {
    constructor();
    private configFileExists;
    execute(): Promise<void>;
}
