import { SequentialChain } from "../../../../common/utils/chains/SequentialChain/SequentialChain";
import { InitUserPreferences } from "../../init.types";
import { SetGitIgnoreHandler } from "../handlers/SetGitIgnore.handler";
import { SetUserEntrypointHandler } from "../handlers/SetUserEntrypoint.handler";

export class SetUserPreferencesChain extends SequentialChain<InitUserPreferences> {
  constructor() {
    super();
    this.handlers = [new SetUserEntrypointHandler(), new SetGitIgnoreHandler()];
  }
}
