import { Manual } from "../../common/types/manual";
import { ConfigService } from "../config/config.service";
import { LoadManualInstructionsOptions } from "./manual.types";
export declare class ManualService {
    private readonly configService;
    constructor(configService: ConfigService);
    getManual(manualRef: string): Manual;
    private getInstructionByTrigger;
    private loadManualMandatoryInstructions;
    loadManualInstructions(manual: Manual, { path, name, triggers, template }: LoadManualInstructionsOptions): void;
    containsTriggers(manual: Manual, triggers: string[]): boolean;
    manualExists(manualRef: Manual["ref"]): boolean;
    buildManual(manual: Manual): void;
    getManuals(): Manual[];
}
