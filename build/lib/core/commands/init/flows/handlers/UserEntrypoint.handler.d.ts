import { InitUserPreferences } from "../../init.types";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
export declare class UserEntrypointHandler extends SequentialChainHandler<InitUserPreferences> {
    handle(request: any): Promise<InitUserPreferences>;
}
