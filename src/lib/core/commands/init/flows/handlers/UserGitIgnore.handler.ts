import { Selector } from "../../../../../ui/components/Selector/Selector";
import { SequentialChainHandler } from "../../../../common/SequentialChain/SequentialChainHandler";
import { GITIGNORE_QUESTION } from "../../init.constants";
import { InitUserPreferences } from "../../init.types";

export class UserGitIgnoreHandler extends SequentialChainHandler<InitUserPreferences> {
  public async handle(request: InitUserPreferences): Promise<Partial<InitUserPreferences>> {
    const git = await Selector.select(GITIGNORE_QUESTION);
    return await super.handle({ ...request, git: git as boolean });
  }
}
