import { Instruction } from "../../../../common/types/instruction";
import { CancelableLoopChainHandler } from "../../../../common/utils/chains/CancelableLoopChain/CancelableLoopChain.handler";
import { Selector } from "../../../../../ui/components/Selector/Selector";
import { TextField } from "../../../../../ui/components/TextField/TextField";
import {
  ADD_INSTRUCTIONS_QUESTION,
  SET_INSTRUCTION_EXTENSION_QUESTION,
  SET_INSTRUCTION_FILENAME_QUESTION,
  SET_INSTRUCTION_PREFFIX_QUESTION,
  SET_INSTRUCTION_TRIGGER_QUESTION,
} from "../../design.constants";

export class DesignInstructionHandler extends CancelableLoopChainHandler<Instruction[]> {
  public async handle(request: Instruction[], onCancel: () => void): Promise<Instruction[]> {
    const addInstructions = await Selector.select(ADD_INSTRUCTIONS_QUESTION);

    if (!addInstructions) {
      onCancel();
      return request;
    }

    const extension = await TextField.ask(SET_INSTRUCTION_EXTENSION_QUESTION);
    const name = await TextField.ask(SET_INSTRUCTION_FILENAME_QUESTION);
    const preffix = await TextField.ask(SET_INSTRUCTION_PREFFIX_QUESTION);
    const trigger = await TextField.ask(SET_INSTRUCTION_TRIGGER_QUESTION);

    const newInstruction: Instruction = { extension, name, preffix, trigger };

    return await super.handle([...request, newInstruction], onCancel);
  }
}
