import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedPrototypeDesign } from "../../design.types";
export declare class BuildPrototypeHandler extends SequentialChainHandler<SelectedPrototypeDesign> {
    constructor();
    handle(request: SelectedPrototypeDesign): Promise<SelectedPrototypeDesign>;
}
