import { SelectorOption } from "../Selector/Selector.types";
export interface MultiSelectProps {
    message: string;
    options: SelectorOption[];
    required: boolean;
}
