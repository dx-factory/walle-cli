export declare abstract class SequentialFlowHandler<T> implements SequentialHandler<T> {
    private nextHandler;
    setNext(handler: SequentialHandler): SequentialHandler;
    handle(request: Partial<T>): Promise<Partial<T>>;
}
