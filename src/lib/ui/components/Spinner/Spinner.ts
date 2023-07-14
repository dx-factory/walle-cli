import { log, spinner } from "@clack/prompts";
import { setTimeout } from "timers/promises";
import { SeverityLevels, severities } from "../../common/severity";
import { SpinnerActions } from "./Spinner.types";

interface WaitOptions {
  startMessage: string;
  callback: () => any;
  stopMessage?: string;
  delay?: number;
}

export class Spinner {
  static async wait({ startMessage, stopMessage, callback, delay = 2000 }: WaitOptions): Promise<void> {
    const customSpinner: SpinnerActions = spinner();
    customSpinner.start(severities[SeverityLevels.DEFAULT](startMessage));
    callback();
    await setTimeout(delay);
    customSpinner.stop(stopMessage && severities[SeverityLevels.SUCCESS](`✅ ${stopMessage}`));
  }
}
