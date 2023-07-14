import Config from "../../config/config";
import { Manual, Prototype } from "../../config/config.types";

export class PrototypeService {
  constructor(private readonly config: Config) {}

  public getPrototype(prototypeRef: string): Prototype {
    const prototype = this.config.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    return prototype;
  }

  public getPrototypeManual(prototypeRef: string): Manual {
    const prototype = this.getPrototype(prototypeRef);
    if (!prototype.manual) throw new Error(`Prototype missing manual`);
    const manual = this.config.getManual(prototype.manual);
    if (!manual) throw new Error(`Invalid manual ${prototype.manual}`);
    return manual;
  }
}
