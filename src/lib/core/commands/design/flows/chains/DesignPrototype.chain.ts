import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { SelectedDesign } from "../../design.types";

export class DesignPrototypeChain extends SequentialChain<SelectedDesign> {
  constructor() {
    super();
    this.handlers = [];
  }
}
