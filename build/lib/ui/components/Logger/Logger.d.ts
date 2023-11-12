import { SeverityLevelsType } from "../../common/severity";
interface LoggerOptions {
    type: SeverityLevelsType;
    title: string;
    message?: string;
}
export declare class Logger {
    static start({ type, title, message }: LoggerOptions): void;
    static end({ title }: LoggerOptions): void;
    static note({ type, title, message }: LoggerOptions): void;
    static error({ type, title, message }: LoggerOptions): void;
}
export {};
