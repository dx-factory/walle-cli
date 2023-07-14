import { intro, log, note, outro } from "@clack/prompts";
import { SeverityLevels, SeverityLevelsType, severities } from "../../common/severity";

interface LoggerOptions {
  type: SeverityLevelsType;
  title: string;
  message?: string;
}

export class Logger {
  static start({ type, title = "", message = "" }: LoggerOptions): void {
    const formattedTitle = `${severities[type](title)}`;
    intro(formattedTitle);
    message && log.message(severities[type](message));
  }

  static end({ title }: LoggerOptions): void {
    outro(title);
  }

  static note({ type, title = "", message = "" }: LoggerOptions): void {
    note(severities[type](message), title);
  }

  static error({ type = SeverityLevels.DEFAULT, title, message = "" }: LoggerOptions): void {
    const formattedTitle = `${severities[type].bold(title)} ${severities[SeverityLevels.ERROR](message)}`;
    outro(formattedTitle);
  }
}
