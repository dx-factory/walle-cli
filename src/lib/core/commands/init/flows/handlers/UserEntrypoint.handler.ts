import { InitUserPreferences } from "../../init.types";
import { TextField } from "../../../../../ui/components/TextField/TextField";
import { PROJECT_ENTRYPOINT_QUESTION } from "../../init.constants";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";

export class UserEntrypointHandler extends SequentialChainHandler<InitUserPreferences> {
  public async handle(request) {
    const entryPoint = await TextField.ask(PROJECT_ENTRYPOINT_QUESTION);
    return await super.handle({ ...request, entryPoint });
  }
}
