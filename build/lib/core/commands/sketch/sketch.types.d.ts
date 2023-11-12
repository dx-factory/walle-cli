import { Prototype } from "../../common/types/prototype";
export interface DepuratedPrototypeSketch {
    prototype: Prototype;
    name: string;
    entryPoint: string;
}
export interface ISketchCommand {
    execute(args: string[]): Promise<void>;
}
