export declare const Commands: {
    readonly make: "make";
    readonly sketch: "sketch";
    readonly init: "init";
    readonly design: "design";
    readonly fetch: "fetch";
};
export type Command = (typeof Commands)[keyof typeof Commands];
export interface ICommand {
    execute(args: string[]): Promise<void>;
}
