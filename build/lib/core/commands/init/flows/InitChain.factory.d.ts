import Factory from "../../../common/utils/factory";
import { GetUserPreferencesChain } from "./chains/GetUserPreferences.chain";
import { SetUserPreferencesChain } from "./chains/SetUserPreferences.chain";
export default class InitChainFactory extends Factory {
    private static GetUserPreferencesChain;
    private static SetUserPreferencesChain;
    static get getUserPreferencesChain(): GetUserPreferencesChain;
    static get setUserPreferencesChain(): SetUserPreferencesChain;
}
