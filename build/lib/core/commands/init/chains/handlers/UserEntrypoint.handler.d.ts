import { InitUserResponse } from "../../init.types";
import { SequentialChainHandler } from "../../../../common/SequentialChain/SequentialChainHandler";
export declare class UserEntrypointHandler extends SequentialChainHandler<InitUserResponse> {
    handle(request: any): Promise<Partial<InitUserResponse>>;
}
