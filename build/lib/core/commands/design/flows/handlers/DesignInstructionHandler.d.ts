import { Instruction } from "../../../../common/types/instruction";
import { CancelableLoopChainHandler } from "../../../../common/utils/chains/CancelableLoopChain/CancelableLoopChain.handler";
export declare class DesignInstructionHandler extends CancelableLoopChainHandler<Instruction[]> {
    handle(request: Instruction[], onCancel: () => void): Promise<Instruction[]>;
}
