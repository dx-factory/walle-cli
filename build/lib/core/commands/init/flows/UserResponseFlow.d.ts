import { SequentialFlowHandler } from "../../../common/SequentialFlow/SequentialFlowHandler";
import { InitUserResponse } from "../init.types";
export declare class InitUserResponseFlow {
    static execute(handlers: SequentialFlowHandler<InitUserResponse>[]): Promise<Partial<InitUserResponse>>;
}
