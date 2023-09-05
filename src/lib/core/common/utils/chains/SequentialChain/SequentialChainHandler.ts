interface SequentialHandler<T = any> {
  setNext(handler: SequentialHandler): SequentialHandler;
  handle(request: Partial<T>): Promise<T>;
}

export abstract class SequentialChainHandler<T> implements SequentialHandler<T> {
  private nextHandler: SequentialHandler;

  public setNext(handler: SequentialHandler): SequentialHandler {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(request: T): Promise<T> {
    if (this.nextHandler) {
      return await this.nextHandler.handle(request);
    }
    return request;
  }
}
