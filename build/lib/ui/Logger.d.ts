interface LoggerOptions {
    type: "intro" | "outro";
    message: string;
}
export declare const Logger: ({ type, message }: LoggerOptions) => void;
export {};
