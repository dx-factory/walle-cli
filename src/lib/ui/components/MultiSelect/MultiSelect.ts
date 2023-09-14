import { multiselect, cancel, isCancel } from "@clack/prompts";
import { MultiSelectProps } from "./MultiSelect.types";
import { SelectorOption, SelectValue } from "../Selector/Selector.types";

export class MultiSelect {
  static async select({ message, options, required = false }: MultiSelectProps) {
    const selectedOptions = await multiselect<SelectorOption[], SelectValue>({ message, options, required });

    if (isCancel(selectedOptions)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }
    return selectedOptions;
  }
}
