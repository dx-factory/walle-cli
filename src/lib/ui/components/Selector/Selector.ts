import { select } from "@clack/prompts";
import { SelectorOption, SelectValue, SelectProps } from "./Selector.types";

export class Selector {
  static async select({ message, options }: SelectProps) {
    const selectedOption = await select<SelectorOption[], SelectValue>({
      message,
      options: options,
    });
    return selectedOption;
  }
}
