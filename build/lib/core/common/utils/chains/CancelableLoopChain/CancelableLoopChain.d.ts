import { CancelableLoopChainHandler } from "./CancelableLoopChain.handler";
export declare abstract class CancelableLoopChain<T = void> {
    protected handlers: CancelableLoopChainHandler<T>[];
    private canceled;
    execute(props?: T): Promise<T>;
}
