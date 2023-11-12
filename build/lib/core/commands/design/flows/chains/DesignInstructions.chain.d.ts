import { Instruction } from "../../../../common/types/instruction";
import { CancelableLoopChain } from "../../../../common/utils/chains/CancelableLoopChain/CancelableLoopChain";
export declare class DesignInstructionsChain extends CancelableLoopChain<Instruction[]> {
    constructor();
}
