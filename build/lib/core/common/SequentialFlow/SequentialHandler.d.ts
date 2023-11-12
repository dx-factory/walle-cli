interface SequentialHandler<T = any> {
    setNext(handler: SequentialHandler): SequentialHandler;
    handle(request: Partial<T>): Promise<Partial<T>>;
}
