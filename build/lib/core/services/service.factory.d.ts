import Factory from "../common/utils/factory";
import { ConfigService } from "./config/config.service";
import { ManualService } from "./manual";
import { PrototypeService } from "./prototype";
export default class ServiceFactory extends Factory {
    private static manualService;
    private static prototypeService;
    private static configService;
    static get getConfigService(): ConfigService;
    static get getManualService(): ManualService;
    static get getPrototypeService(): PrototypeService;
}
