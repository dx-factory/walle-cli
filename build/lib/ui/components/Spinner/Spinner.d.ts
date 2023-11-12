interface WaitOptions {
    startMessage: string;
    callback: () => any;
    stopMessage?: string;
    delay?: number;
}
export declare class Spinner {
    static wait<T>({ startMessage, stopMessage, callback, delay }: WaitOptions): Promise<T>;
}
export {};
