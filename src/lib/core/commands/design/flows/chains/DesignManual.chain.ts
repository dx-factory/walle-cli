import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { SelectedManualDesign } from "../../design.types";
import { BuildManualHandler } from "../handlers/BuildManualHandler";
import { DesignManualHandler } from "../handlers/DesignManualHandler";
import { DesignManualInstructionsHandler } from "../handlers/DesignManualInstructionsHandler";

export class DesignManualChain extends SequentialChain<SelectedManualDesign> {
  constructor() {
    super();
    this.handlers = [new DesignManualHandler(), new DesignManualInstructionsHandler(), new BuildManualHandler()];
  }
}
