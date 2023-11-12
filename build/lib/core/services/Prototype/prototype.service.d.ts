import { Manual } from "../../common/types/manual";
import { Prototype } from "../../common/types/prototype";
import { ConfigService } from "../config/config.service";
import { IPrototypeService } from "./prototype.types";
export declare class PrototypeService implements IPrototypeService {
    private readonly configService;
    constructor(configService: ConfigService);
    getPrototype(prototypeRef: string): Prototype;
    getPrototypeManual(prototypeRef: string): Manual;
    getPrototypes(): Prototype[];
    prototypeExists(prototypeRef: string): boolean;
    buildPrototype(prototype: Prototype): void;
}
