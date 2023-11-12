import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedPrototypeDesign } from "../../design.types";
export declare class DesignPrototypeHandler extends SequentialChainHandler<SelectedPrototypeDesign> {
    handle(request: SelectedPrototypeDesign): Promise<SelectedPrototypeDesign>;
}
