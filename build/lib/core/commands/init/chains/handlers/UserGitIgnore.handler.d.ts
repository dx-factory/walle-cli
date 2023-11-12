import { SequentialChainHandler } from "../../../../common/SequentialChain/SequentialChainHandler";
import { InitUserResponse } from "../../init.types";
export declare class UserGitIgnoreHandler extends SequentialChainHandler<InitUserResponse> {
    handle(request: InitUserResponse): Promise<Partial<InitUserResponse>>;
}
