import Factory from "../../../common/utils/factory";
import { DesignInstructionsChain } from "./chains/DesignInstructions.chain";
import { DesignManualChain } from "./chains/DesignManual.chain";
import { DesignPrototypeChain } from "./chains/DesignPrototype.chain";
import { PickDesignTypeChain } from "./chains/PickDesignType.chain";

export default class DesignChainFactory extends Factory {
  private static PickDesignTypeChain: PickDesignTypeChain;
  private static DesignManualChain: DesignManualChain;
  private static DesignPrototypeChain: DesignPrototypeChain;
  private static DesignInstructionsChain: DesignInstructionsChain;

  static get pickDesignTypeChain(): PickDesignTypeChain {
    return this.resolve(this.PickDesignTypeChain, () => new PickDesignTypeChain());
  }

  static get designManualChain(): DesignManualChain {
    return this.resolve(this.DesignManualChain, () => new DesignManualChain());
  }

  static get designPrototypeChain(): DesignPrototypeChain {
    return this.resolve(this.DesignPrototypeChain, () => new DesignPrototypeChain());
  }

  static get designInstructionsChain(): DesignInstructionsChain {
    return this.resolve(this.DesignInstructionsChain, () => new DesignInstructionsChain());
  }
}
