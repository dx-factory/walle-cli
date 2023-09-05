export abstract class SequentialFlowHandler<T> implements SequentialHandler<T> {
  private nextHandler: SequentialHandler;

  public setNext(handler: SequentialHandler): SequentialHandler {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(request: Partial<T>): Promise<Partial<T>> {
    if (this.nextHandler) {
      return await this.nextHandler.handle(request);
    }
    return request;
  }
}
