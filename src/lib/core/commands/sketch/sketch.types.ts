import { Prototype } from "../../config/config.types";

export interface DepuratedPrototypeSketch {
  prototype: Prototype;
  name: string;
}

export interface ISketchCommand {
  execute(args: string[]): void;
}
