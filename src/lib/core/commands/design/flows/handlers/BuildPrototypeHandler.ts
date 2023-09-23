import { Spinner } from "../../../../../ui/components/Spinner/Spinner";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import ServiceFactory from "../../../../services/service.factory";
import { SelectedPrototypeDesign } from "../../design.types";

export class BuildPrototypeHandler extends SequentialChainHandler<SelectedPrototypeDesign> {
  constructor() {
    super();
  }

  public async handle(request: SelectedPrototypeDesign): Promise<SelectedPrototypeDesign> {
    const buildPrototype = () =>
      ServiceFactory.getPrototypeService.buildPrototype({
        ref: request.ref,
        manual: request.manualRef,
        parts: request.parts,
      });

    await Spinner.wait({ startMessage: "Building prototype...", stopMessage: "Prototype built!", callback: buildPrototype });

    return await super.handle(request);
  }
}
