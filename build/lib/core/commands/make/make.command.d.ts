import { IMakeCommand } from "./make.types";
import { PrototypeService } from "../../services/prototype/prototype.service";
import { ConfigService } from "../../services/config/config.service";
import { Manual } from "../../common/types/manual";
import { ManualService } from "../../services/manual";
export declare class MakeCommand implements IMakeCommand {
    private readonly manualService;
    private readonly prototypeService;
    private readonly configService;
    constructor(manualService: ManualService, prototypeService: PrototypeService, configService: ConfigService);
    private depurate;
    makePrototype(name: string, manual: Manual, triggers: string[], path: string): void;
    execute(args: string[]): Promise<void>;
}
