import { InitUserResponse } from "../init.types";
import { UserEntrypointHandler } from "./handlers/UserEntrypoint.handler";
import { UserGitIgnoreHandler } from "./handlers/UserGitIgnore.handler";

export class InitUserResponseFlow {
  static async execute(): Promise<Partial<InitUserResponse>> {
    const entrypointHandler = new UserEntrypointHandler();
    const gitIgnoreHandler = new UserGitIgnoreHandler();

    entrypointHandler.setNext(gitIgnoreHandler);

    return await entrypointHandler.handle({});
  }
}
