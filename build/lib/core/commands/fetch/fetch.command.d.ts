import { ICommand } from "../command.types";
import { ConfigService } from "../../services/config/config.service";
export declare class FetchCommand implements ICommand {
    private readonly configService;
    constructor(configService: ConfigService);
    depurateArgs(args: string[]): string;
    execute(args: string[]): Promise<void>;
}
