import { severities } from "../../common/severity";
import { AskOptions } from "./TextField.types";
import { cancel, isCancel, text } from "@clack/prompts";

export class TextField {
  static async ask(options: AskOptions): Promise<string> {
    const { message, placeholder, defaultValue, validate, optional = false } = options;

    const handleValidate = (value: string) => {
      if (!value.length) return "Extension cannot be empty.";
      if (validate) return validate(value);
    };

    const formattedMessage = optional ? `${message} ${severities.default("(optional)")}` : message;

    const response = await text({
      message: formattedMessage,
      placeholder,
      initialValue: defaultValue,
      validate: optional ? undefined : handleValidate,
    });

    if (isCancel(response)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    return response as string;
  }
}
