import { SelectValue, SelectProps } from "./Selector.types";
export declare class Selector {
    static select({ message, options }: SelectProps): Promise<SelectValue>;
}
