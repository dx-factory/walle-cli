import { Manual } from "../../common/types/manual";
import { Prototype } from "../../common/types/prototype";
import { ConfigService } from "../config/config.service";
import { IPrototypeService } from "./prototype.types";

export class PrototypeService implements IPrototypeService {
  constructor(private readonly configService: ConfigService) {}

  public getPrototype(prototypeRef: string): Prototype {
    const prototype = this.configService.getPrototype(prototypeRef);
    if (!prototype) throw new Error(`Invalid prototype ${prototypeRef}`);
    return prototype;
  }

  public getPrototypeManual(prototypeRef: string): Manual {
    const prototype = this.getPrototype(prototypeRef);
    if (!prototype.manual) throw new Error(`Prototype missing manual`);
    const manual = this.configService.getManual(prototype.manual);
    if (!manual) throw new Error(`Invalid manual ${prototype.manual}`);
    return manual;
  }

  public getPrototypes(): Prototype[] {
    return this.configService.get("prototypes") as Prototype[];
  }

  public prototypeExists(prototypeRef: string): boolean {
    try {
      this.getPrototype(prototypeRef);
      return true;
    } catch {
      return false;
    }
  }

  public buildPrototype(prototype: Prototype): void {
    return this.configService.setPrototype(prototype);
  }
}
