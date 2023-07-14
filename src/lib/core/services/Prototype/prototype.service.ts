import Config from "../../config/config";
import { Manual, Prototype } from "../../config/config.types";

export class PrototypeService {
  constructor() {}

  public getPrototype(prototypeRef: string): Prototype {
    const prototype = Config.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    return prototype;
  }

  public getPrototypeManual(prototypeRef: string): Manual {
    const prototype = this.getPrototype(prototypeRef);
    if (!prototype.manual) throw new Error(`Prototype missing manual`);
    const manual = Config.getManual(prototype.manual);
    if (!manual) throw new Error(`Invalid manual ${prototype.manual}`);
    return manual;
  }
}
