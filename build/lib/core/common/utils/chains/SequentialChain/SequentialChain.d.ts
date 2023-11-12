import { SequentialChainHandler } from "./SequentialChainHandler";
export declare abstract class SequentialChain<T = void> {
    protected handlers: SequentialChainHandler<T>[];
    execute(props?: T): Promise<T>;
}
