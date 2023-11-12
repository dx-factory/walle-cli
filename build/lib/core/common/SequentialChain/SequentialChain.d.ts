import { SequentialChainHandler } from "./SequentialChainHandler";
export declare abstract class SequentialChain<T> {
    protected handlers: SequentialChainHandler<T>[];
    execute(): Promise<Partial<T>>;
}
