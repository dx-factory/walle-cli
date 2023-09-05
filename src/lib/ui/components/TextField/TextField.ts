import { AskOptions } from "./TextField.types";
import { text } from "@clack/prompts";

export class TextField {
  static async ask(options: AskOptions): Promise<string> {
    const { message, placeholder, defaultValue, validate } = options;

    const response = await text({ message, placeholder, initialValue: defaultValue, validate });
    return response as string;
  }
}
