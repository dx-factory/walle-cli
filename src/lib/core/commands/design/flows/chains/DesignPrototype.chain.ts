import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { SelectedPrototypeDesign } from "../../design.types";
import { BuildPrototypeHandler } from "../handlers/BuildPrototypeHandler";
import { DesignPrototypeHandler } from "../handlers/DesignPrototypeHandler";

export class DesignPrototypeChain extends SequentialChain<SelectedPrototypeDesign> {
  constructor() {
    super();
    this.handlers = [new DesignPrototypeHandler(), new BuildPrototypeHandler()];
  }
}
