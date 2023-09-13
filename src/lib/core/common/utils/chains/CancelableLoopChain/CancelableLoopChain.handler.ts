interface CancelableLoopHandler<T = any> {
  setNext(handler: CancelableLoopHandler): CancelableLoopHandler;
  handle(request: Partial<T>, onCancel: () => void): Promise<T>;
}

export abstract class CancelableLoopChainHandler<T> implements CancelableLoopHandler<T> {
  private nextHandler: CancelableLoopHandler;

  public setNext(handler: CancelableLoopHandler): CancelableLoopHandler {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(request: T, onCancel: () => void): Promise<T> {
    if (this.nextHandler) {
      return await this.nextHandler.handle(request, onCancel);
    }
    return request;
  }
}
