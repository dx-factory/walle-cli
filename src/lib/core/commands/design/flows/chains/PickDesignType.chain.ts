import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { PickDesignHandler } from "../handlers/PickDesignHandler";

export class PickDesignTypeChain extends SequentialChain<void> {
  constructor() {
    super();
    this.handlers = [new PickDesignHandler()];
  }
}
