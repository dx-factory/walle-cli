import { Manual, Prototype } from "../../config/config.types";

export interface IPrototypeService {
  getPrototype(prototypeRef: string): Prototype;
  getPrototypeManual(prototypeRef: string): Manual;
}
