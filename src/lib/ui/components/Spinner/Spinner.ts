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
  static async wait<T>({ startMessage, stopMessage, callback, delay = 1000 }: WaitOptions): Promise<T> {
    const customSpinner: SpinnerActions = spinner();
    customSpinner.start(severities[SeverityLevels.DEFAULT](startMessage));
    const callbackReturn = callback();
    await setTimeout(delay);
    customSpinner.stop(stopMessage && severities[SeverityLevels.SUCCESS](stopMessage));
    return callbackReturn;
  }
}
