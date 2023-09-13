import { CancelableLoopChainHandler } from "./CancelableLoopChain.handler";

export abstract class CancelableLoopChain<T = void> {
  protected handlers: CancelableLoopChainHandler<T>[];

  private canceled = false;

  async execute(props?: T): Promise<T> {
    for (const index in this.handlers) {
      if (this.handlers[+index + 1]) this.handlers[index].setNext(this.handlers[+index + 1]);
    }

    let result: T;
    while (!this.canceled) {
      result = await this.handlers[0].handle(props, () => (this.canceled = true));
    }
    return result;
  }
}
