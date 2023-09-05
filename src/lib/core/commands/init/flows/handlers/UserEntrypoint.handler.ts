import { InitUserResponse } from "../../init.types";
import { TextField } from "../../../../../ui/components/TextField/TextField";
import { PROJECT_ENTRYPOINT_QUESTION } from "../../init.constants";
import { SequentialFlowHandler } from "../../../../common/SequentialFlow/SequentialFlowHandler";

export class UserEntrypointHandler extends SequentialFlowHandler<InitUserResponse> {
  public async handle(request) {
    const entryPoint = await TextField.ask(PROJECT_ENTRYPOINT_QUESTION);
    return await super.handle({ ...request, entryPoint });
  }
}
