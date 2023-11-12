import { Manual, Prototype } from "./config.types";
export default class Config {
    static get(key: string): any;
    static getPrototype(prototypeRef: string): Prototype;
    static getManual(manualRef: string): Manual;
    static getEntryPoint(): string;
}
