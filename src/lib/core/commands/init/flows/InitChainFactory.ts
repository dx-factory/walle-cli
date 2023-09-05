import Factory from "../../../common/factory";
import { InitUserPreferencesChain } from "./chains/InitUserPreferencesChain";

export default class InitChainFactory extends Factory {
  private static InitUserPreferencesChain: InitUserPreferencesChain;

  static get initUserPreferencesChain(): InitUserPreferencesChain {
    return this.resolve(this.InitUserPreferencesChain, () => new InitUserPreferencesChain());
  }
}
