import { Selector } from "../../../../../ui/components/Selector/Selector";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedManualDesign } from "../../design.types";
import DesignChainFactory from "../DesignChain.factory";

export class DesignManualInstructionsHandler extends SequentialChainHandler<SelectedManualDesign> {
  public async handle(request: SelectedManualDesign): Promise<SelectedManualDesign> {
    const instructions = await DesignChainFactory.designInstructionsChain.execute([]);
    return await super.handle({ ...request, defaultInstructions: instructions });
  }
}
