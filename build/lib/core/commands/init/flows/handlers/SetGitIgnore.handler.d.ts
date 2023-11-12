import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { InitUserPreferences } from "../../init.types";
export declare class SetGitIgnoreHandler extends SequentialChainHandler<InitUserPreferences> {
    handle(preferences: InitUserPreferences): Promise<InitUserPreferences>;
}
