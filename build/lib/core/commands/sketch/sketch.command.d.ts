import { ConfigService } from "../../services/config/config.service";
import { ISketchCommand } from "./sketch.types";
export declare class SketchCommand implements ISketchCommand {
    private readonly configService;
    constructor(configService: ConfigService);
    private depurate;
    private sketchPrototype;
    execute(args: string[]): Promise<void>;
}
