import { Instruction } from "../../../../common/types/instruction";
import { CancelableLoopChainHandler } from "../../../../common/utils/chains/CancelableLoopChain/CancelableLoopChain.handler";
import { Selector } from "../../../../../ui/components/Selector/Selector";
import { TextField } from "../../../../../ui/components/TextField/TextField";

export class DesignInstructionHandler extends CancelableLoopChainHandler<Instruction[]> {
  public async handle(request: Instruction[], onCancel: () => void): Promise<Instruction[]> {
    const addInstructions = await Selector.select({
      message: "Do you want to create an instruction for this manual?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    });

    if (!addInstructions) {
      onCancel();
      return request;
    }
    // TODO: Get instruction
    const extension = await TextField.ask({
      message: "Set your file extension:",
      placeholder: "js, ts, go, cpp...",
      optional: true,
    });

    const name = await TextField.ask({
      message: "Specify your fileName name:",
      placeholder: "index, main, app...",
      optional: true,
    });

    const preffix = await TextField.ask({
      message: "Specify the suffix:",
      placeholder: "styles, types, api...",
      optional: true,
    });

    const trigger = await TextField.ask({
      message: "Specify the trigger:",
      optional: true,
    });

    const newInstruction = { extension, name, preffix, trigger };

    return await super.handle([...request, newInstruction], onCancel);
  }
}
