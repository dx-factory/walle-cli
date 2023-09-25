import { Instruction } from "../../common/types/instruction";
import { Manual } from "../../common/types/manual";
import loadTemplate from "../../file/copy";
import { createFile } from "../../file/writer";
import { WALLE_CONFIG_TEMPLATES_PATH } from "../config/config.constants";

import { ConfigService } from "../config/config.service";
import { LoadManualInstructionsOptions } from "./manual.types";

export class ManualService {
  constructor(private readonly configService: ConfigService) {}

  public getManual(manualRef: string): Manual {
    const manual = this.configService.getManual(manualRef);
    if (!manual) throw new Error(`Invalid manual ${manualRef}`);
    return manual;
  }

  private getInstructionByTrigger(manual: Manual, trigger: string): Instruction {
    const instructions = manual.instructions as Instruction[];
    const instruction = instructions.find(({ trigger: instructionTrigger }) => instructionTrigger === trigger);
    if (!instruction) throw new Error(`Instruction not found for trigger ${trigger}`);
    return instruction;
  }

  private loadManualMandatoryInstructions(manual: Manual, { path, name }: LoadManualInstructionsOptions): void {
    const instructions = manual.instructions as Instruction[];
    instructions.forEach(({ extension, name: fileName, trigger, preffix, template }) => {
      if (!trigger) {
        createFile(path, `${fileName || name}${preffix ? `.${preffix}` : ""}.${extension}`);

        if (!template) return;
        loadTemplate(
          `${WALLE_CONFIG_TEMPLATES_PATH}/${template}.txt`,
          `${path}/${fileName || name}${preffix ? `.${preffix}` : ""}.${extension}`,
          {
            ref: /%%(.*?)%%/g,
            value: name,
          },
        );
      }
    });
  }

  public loadManualInstructions(manual: Manual, { path, name, triggers = [], template }: LoadManualInstructionsOptions): void {
    if (typeof manual.instructions === "string") {
      createFile(`${path}/${path}.${manual.instructions}`, "");
    }
    if (manual.instructions instanceof Array) {
      triggers.forEach((trigger) => {
        const { extension, preffix: suffix, name: fileName, template } = this.getInstructionByTrigger(manual, trigger);

        const resultingFileName = `${fileName || name}${suffix ? `.${suffix}` : ""}.${extension}`;

        createFile(path, resultingFileName, "");
        if (!template) return;
        loadTemplate(`${WALLE_CONFIG_TEMPLATES_PATH}/${template}.txt`, `${path}/${resultingFileName}`, {
          ref: /%%(.*?)%%/g,
          value: name,
        });
      });
      this.loadManualMandatoryInstructions(manual, { path, name });
    }
  }

  public containsTriggers(manual: Manual, triggers: string[]): boolean {
    const instructions = manual.instructions as Instruction[];
    const manualTriggers = instructions.map((instruction) => instruction.trigger);
    return triggers.every((trigger) => manualTriggers.includes(trigger));
  }

  public manualExists(manualRef: Manual["ref"]): boolean {
    try {
      this.getManual(manualRef);
      return true;
    } catch (e) {
      return false;
    }
  }

  public buildManual(manual: Manual): void {
    this.configService.setManual(manual);
  }

  public getManuals(): Manual[] {
    return this.configService.get("manuals") as Manual[];
  }
}
