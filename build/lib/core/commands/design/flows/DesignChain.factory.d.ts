import Factory from "../../../common/utils/factory";
import { DesignInstructionsChain } from "./chains/DesignInstructions.chain";
import { DesignManualChain } from "./chains/DesignManual.chain";
import { DesignPrototypeChain } from "./chains/DesignPrototype.chain";
import { PickDesignTypeChain } from "./chains/PickDesignType.chain";
export default class DesignChainFactory extends Factory {
    private static PickDesignTypeChain;
    private static DesignManualChain;
    private static DesignPrototypeChain;
    private static DesignInstructionsChain;
    static get pickDesignTypeChain(): PickDesignTypeChain;
    static get designManualChain(): DesignManualChain;
    static get designPrototypeChain(): DesignPrototypeChain;
    static get designInstructionsChain(): DesignInstructionsChain;
}
