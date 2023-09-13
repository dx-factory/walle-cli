import { Spinner } from "../../../../../ui/components/Spinner/Spinner";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import ServiceFactory from "../../../../services/service.factory";
import { SelectedManualDesign } from "../../design.types";

export class BuildManualHandler extends SequentialChainHandler<SelectedManualDesign> {
  public async handle(request: SelectedManualDesign): Promise<SelectedManualDesign> {
    const buildManual = () =>
      ServiceFactory.getManualService.buildManual({
        ref: request.ref,
        instructions: request.defaultInstructions,
        folder: request.folder,
      });
    Spinner.wait({ startMessage: "Building manual...", stopMessage: "Manual built!", callback: buildManual });
    return await super.handle(request);
  }
}
