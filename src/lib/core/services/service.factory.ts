import Factory from "../common/utils/factory";
import { ConfigService } from "./config/config.service";
import { ManualService } from "./manual";
import { PrototypeService } from "./prototype";

// TODO: Find solution to configService dependency
export default class ServiceFactory extends Factory {
  private static manualService: ManualService;
  private static prototypeService: PrototypeService;
  private static configService: ConfigService;

  static get getConfigService(): ConfigService {
    return this.resolve(this.configService, () => new ConfigService());
  }

  static get getManualService(): ManualService {
    return this.resolve(this.manualService, () => new ManualService(new ConfigService()));
  }

  static get getPrototypeService(): PrototypeService {
    return this.resolve(this.prototypeService, () => new PrototypeService(new ConfigService()));
  }
}
