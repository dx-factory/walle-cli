import Factory from "../../../common/utils/factory";
import { GetUserPreferencesChain } from "./chains/GetUserPreferences.chain";
import { SetUserPreferencesChain } from "./chains/SetUserPreferences.chain";

export default class InitChainFactory extends Factory {
  private static GetUserPreferencesChain: GetUserPreferencesChain;
  private static SetUserPreferencesChain: SetUserPreferencesChain;

  static get getUserPreferencesChain(): GetUserPreferencesChain {
    return this.resolve(this.GetUserPreferencesChain, () => new GetUserPreferencesChain());
  }

  static get setUserPreferencesChain(): SetUserPreferencesChain {
    return this.resolve(this.SetUserPreferencesChain, () => new SetUserPreferencesChain());
  }
}
