import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import ServiceFactory from "../../../../services/service.factory";
import { InitUserPreferences } from "../../init.types";

export class SetUserEntrypointHandler extends SequentialChainHandler<InitUserPreferences> {
  public async handle(preferences: InitUserPreferences) {
    ServiceFactory.getConfigService.setEntryPoint(preferences.entryPoint);
    return await super.handle(preferences);
  }
}
