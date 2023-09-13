import { ICommand } from "../command.types";
import DesignChainFactory from "./flows/DesignChain.factory";

export class DesignCommand implements ICommand {
  constructor() {}

  async execute(): Promise<void> {
    await DesignChainFactory.pickDesignTypeChain.execute();
  }
}
