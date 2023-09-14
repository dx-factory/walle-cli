import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { SelectedPrototypeDesign } from "../../design.types";
import { DesignPrototypeHandler } from "../handlers/DesignPrototypeHandler";

export class DesignPrototypeChain extends SequentialChain<SelectedPrototypeDesign> {
  constructor() {
    super();
    // TODO: Add BuildPrototypeHandler
    this.handlers = [new DesignPrototypeHandler()];
  }
}
