import { MultiSelectProps } from "./MultiSelect.types";
import { SelectValue } from "../Selector/Selector.types";
export declare class MultiSelect {
    static select({ message, options, required }: MultiSelectProps): Promise<SelectValue[]>;
}
