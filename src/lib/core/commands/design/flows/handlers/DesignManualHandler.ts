import { Selector } from "../../../../../ui/components/Selector/Selector";
import { TextField } from "../../../../../ui/components/TextField/TextField";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SET_MANUAL_FOLDER_QUESTION, SET_MANUAL_REFERENCE_QUESTION } from "../../design.constants";
import { SelectedManualDesign } from "../../design.types";

export class DesignManualHandler extends SequentialChainHandler<SelectedManualDesign> {
  public async handle(request: SelectedManualDesign): Promise<SelectedManualDesign> {
    const manualRef = await TextField.ask(SET_MANUAL_REFERENCE_QUESTION);
    const withFolder = await Selector.select(SET_MANUAL_FOLDER_QUESTION);
    return await super.handle({ ...request, folder: withFolder as boolean, ref: manualRef });
  }
}
