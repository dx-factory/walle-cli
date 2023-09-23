import { MultiSelect } from "../../../../../ui/components/MultiSelect/MultiSelect";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedPrototypeDesign } from "../../design.types";
import {
  SET_PROTOTYPE_ADD_MANUAL_QUESTION,
  SET_PROTOTYPE_MANUAL,
  SET_PROTOTYPE_PART_QUESTION,
  SET_PROTOTYPE_REFERENCE_QUESTION,
} from "../../design.constants";
import ServiceFactory from "../../../../services/service.factory";
import { TextField } from "../../../../../ui/components/TextField/TextField";
import { SelectorOption } from "../../../../../ui/components/Selector/Selector.types";
import { Prototype } from "../../../../common/types/prototype";
import { Manual } from "../../../../common/types/manual";
import { Selector } from "../../../../../ui/components/Selector/Selector";

export class DesignPrototypeHandler extends SequentialChainHandler<SelectedPrototypeDesign> {
  public async handle(request: SelectedPrototypeDesign): Promise<SelectedPrototypeDesign> {
    const prototypeRef = await TextField.ask(SET_PROTOTYPE_REFERENCE_QUESTION);

    const prototypes = ServiceFactory.getPrototypeService.getPrototypes();
    const availablePrototypeOptions = prototypes.reduce((acc: SelectorOption[], prototype: Prototype) => {
      if (prototype.ref !== prototypeRef) acc.push({ label: prototype.ref, value: prototype.ref });
      return acc;
    }, [] as SelectorOption[]);

    const selectedParts = (await MultiSelect.select({
      ...SET_PROTOTYPE_PART_QUESTION,
      options: availablePrototypeOptions,
    })) as string[];

    const manuals = ServiceFactory.getManualService.getManuals();
    const availableManualOptions = manuals.reduce((acc: SelectorOption[], manual: Manual) => {
      acc.push({ label: manual.ref, value: manual.ref });
      return acc;
    }, [] as SelectorOption[]);

    const addManual = await Selector.select(SET_PROTOTYPE_ADD_MANUAL_QUESTION);

    if (!addManual) return await super.handle({ ...request, ref: prototypeRef, parts: selectedParts.length ? selectedParts : undefined });

    const manualRef = (await Selector.select({ ...SET_PROTOTYPE_MANUAL, options: availableManualOptions })) as string;

    return await super.handle({ ...request, ref: prototypeRef, parts: selectedParts.length ? selectedParts : undefined, manualRef });
  }
}
