import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { InitUserPreferences } from "../../init.types";
import { UserEntrypointHandler } from "../handlers/UserEntrypoint.handler";
import { UserGitIgnoreHandler } from "../handlers/UserGitIgnore.handler";

export class GetUserPreferencesChain extends SequentialChain<InitUserPreferences> {
  constructor() {
    super();
    this.handlers = [new UserEntrypointHandler(), new UserGitIgnoreHandler()];
  }
}
