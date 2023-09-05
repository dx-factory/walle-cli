import { Manual } from "../../common/types/manual";
import { Prototype } from "../../common/types/prototype";

export interface IPrototypeService {
  getPrototype(prototypeRef: string): Prototype;
  getPrototypeManual(prototypeRef: string): Manual;
}
