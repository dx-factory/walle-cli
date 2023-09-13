import { Instruction } from "../../../../common/types/instruction";
import { CancelableLoopChain } from "../../../../common/utils/chains/CancelableLoopChain/CancelableLoopChain";
import { DesignInstructionHandler } from "../handlers/DesignInstructionHandler";

export class DesignInstructionsChain extends CancelableLoopChain<Instruction[]> {
  constructor() {
    super();
    this.handlers = [new DesignInstructionHandler()];
  }
}
