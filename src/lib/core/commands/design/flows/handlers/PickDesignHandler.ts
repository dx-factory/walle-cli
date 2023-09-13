import { Selector } from "../../../../../ui/components/Selector/Selector";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { AvailableDesigns, AvailableDesignsType, SelectedDesign } from "../../design.types";
import DesignChainFactory from "../DesignChain.factory";

export class PickDesignHandler extends SequentialChainHandler<void> {
  public async handle(): Promise<void> {
    const selectedDesign = await Selector.select({
      message: "What do you want to design:",
      options: [
        { label: "Manual", value: AvailableDesigns.manual },
        { label: "Prototype", value: AvailableDesigns.prototype },
      ],
    });
    if (selectedDesign === AvailableDesigns.manual) await DesignChainFactory.designManualChain.execute();
    if (selectedDesign === AvailableDesigns.prototype) await DesignChainFactory.designPrototypeChain.execute();
    return await super.handle();
  }
}
