import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedManualDesign } from "../../design.types";
export declare class DesignManualInstructionsHandler extends SequentialChainHandler<SelectedManualDesign> {
    handle(request: SelectedManualDesign): Promise<SelectedManualDesign>;
}
