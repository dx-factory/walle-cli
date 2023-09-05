import { Selector } from "../../../../../ui/components/Selector/Selector";
import { SequentialFlowHandler } from "../../../../common/SequentialFlow/SequentialFlowHandler";
import { GITIGNORE_QUESTION } from "../../init.constants";
import { InitUserResponse } from "../../init.types";

export class UserGitIgnoreHandler extends SequentialFlowHandler<InitUserResponse> {
  public async handle(request: InitUserResponse): Promise<Partial<InitUserResponse>> {
    const git = await Selector.select(GITIGNORE_QUESTION);
    return await super.handle({ ...request, git: git as boolean });
  }
}
