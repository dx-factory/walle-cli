interface CancelableLoopHandler<T = any> {
    setNext(handler: CancelableLoopHandler): CancelableLoopHandler;
    handle(request: Partial<T>, onCancel: () => void): Promise<T>;
}
export declare abstract class CancelableLoopChainHandler<T> implements CancelableLoopHandler<T> {
    private nextHandler;
    setNext(handler: CancelableLoopHandler): CancelableLoopHandler;
    handle(request: T, onCancel: () => void): Promise<T>;
}
export {};
