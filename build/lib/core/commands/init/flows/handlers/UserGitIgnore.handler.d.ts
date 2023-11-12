import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { InitUserPreferences } from "../../init.types";
export declare class UserGitIgnoreHandler extends SequentialChainHandler<InitUserPreferences> {
    handle(request: InitUserPreferences): Promise<Partial<InitUserPreferences>>;
}
