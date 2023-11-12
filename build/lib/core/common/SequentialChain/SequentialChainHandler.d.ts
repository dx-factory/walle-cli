interface SequentialHandler<T = any> {
    setNext(handler: SequentialHandler): SequentialHandler;
    handle(request: Partial<T>): Promise<Partial<T>>;
}
export declare abstract class SequentialChainHandler<T> implements SequentialHandler<T> {
    private nextHandler;
    setNext(handler: SequentialHandler): SequentialHandler;
    handle(request: Partial<T>): Promise<Partial<T>>;
}
export {};
