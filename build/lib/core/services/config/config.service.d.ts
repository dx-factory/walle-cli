import { WalleConfig, WalleConfigKey } from "../../common/types/config";
import { Prototype } from "../../common/types/prototype";
import { Manual } from "../../common/types/manual";
export declare class ConfigService {
    getConfig(): WalleConfig;
    saveConfig(configState: WalleConfig): void;
    get(key: WalleConfigKey): any;
    set(key: WalleConfigKey, value: any): void;
    validate(config: object): boolean;
    getPrototype(prototypeRef: string): Prototype;
    getManual(manualRef: string): Manual;
    setManual(manual: Manual): void;
    setPrototype(prototype: Prototype): void;
    getEntryPoint(): string;
    setEntryPoint(entryPoint: string): void;
    ignoreConfigFile(ignore: boolean): void;
    getTemplate(templateRef: string): string;
}
