import { ICommand } from "../command.types";
export declare class DesignCommand implements ICommand {
    constructor();
    execute(): Promise<void>;
}
