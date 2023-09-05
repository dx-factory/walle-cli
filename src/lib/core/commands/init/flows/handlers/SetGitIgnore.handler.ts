import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import ServiceFactory from "../../../../services/service.factory";
import { InitUserPreferences } from "../../init.types";

export class SetGitIgnoreHandler extends SequentialChainHandler<InitUserPreferences> {
  public async handle(preferences: InitUserPreferences) {
    ServiceFactory.getConfigService.ignoreConfigFile(preferences.git);
    return await super.handle(preferences);
  }
}
