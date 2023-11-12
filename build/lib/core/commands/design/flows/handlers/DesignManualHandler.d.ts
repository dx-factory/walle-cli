import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedManualDesign } from "../../design.types";
export declare class DesignManualHandler extends SequentialChainHandler<SelectedManualDesign> {
    handle(request: SelectedManualDesign): Promise<SelectedManualDesign>;
}
