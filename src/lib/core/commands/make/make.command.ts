import { IMakeCommand } from "./make.types";

export default class MakeCommand implements IMakeCommand {
  constructor() {}

  execute(args: string[]): void {
    console.log("Make command executed", args);
  }
}
