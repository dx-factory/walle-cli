import { SequentialChainHandler } from "./SequentialChainHandler";

export abstract class SequentialChain<T> {
  protected handlers: SequentialChainHandler<T>[];

  async execute(props?: T): Promise<T> {
    for (const index in this.handlers) {
      if (this.handlers[+index + 1]) this.handlers[index].setNext(this.handlers[+index + 1]);
    }

    return await this.handlers[0].handle(props);
  }
}
