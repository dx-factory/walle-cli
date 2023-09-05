import { SequentialChain } from "../../../../common/SequentialChain/SequentialChain";
import { SetUserEntrypointHandler } from "../handlers/SetUserEntrypoint.handler";

export class InitSetUserPreferencesChain extends SequentialChain<void> {
  constructor() {
    super();
    this.handlers = [new SetUserEntrypointHandler()];
  }
}
