import { SequentialChain } from "../../../../common/SequentialChain/SequentialChain";
import { InitUserPreferences } from "../../init.types";
import { UserEntrypointHandler } from "../handlers/UserEntrypoint.handler";
import { UserGitIgnoreHandler } from "../handlers/UserGitIgnore.handler";

export class InitUserPreferencesChain extends SequentialChain<InitUserPreferences> {
  constructor() {
    super();
    this.handlers = [new UserEntrypointHandler(), new UserGitIgnoreHandler()];
  }
}
