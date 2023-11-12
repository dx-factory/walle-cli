import { MultiSelectProps } from "../../../ui/components/MultiSelect/MultiSelect.types";
import { SelectProps } from "../../../ui/components/Selector/Selector.types";
import { AskOptions } from "../../../ui/components/TextField/TextField.types";
/**
 * Design Manual questions
 */
export declare const ADD_INSTRUCTIONS_QUESTION: SelectProps;
export declare const SET_INSTRUCTION_EXTENSION_QUESTION: AskOptions;
export declare const SET_INSTRUCTION_FILENAME_QUESTION: AskOptions;
export declare const SET_INSTRUCTION_PREFFIX_QUESTION: AskOptions;
export declare const SET_INSTRUCTION_TRIGGER_QUESTION: AskOptions;
export declare const SET_MANUAL_REFERENCE_QUESTION: AskOptions;
export declare const SET_MANUAL_FOLDER_QUESTION: SelectProps;
/**
 * Design Prototype questions
 */
export declare const SET_PROTOTYPE_REFERENCE_QUESTION: AskOptions;
export declare const SET_PROTOTYPE_PART_QUESTION: Omit<MultiSelectProps, "options">;
export declare const SET_PROTOTYPE_ADD_MANUAL_QUESTION: SelectProps;
export declare const SET_PROTOTYPE_MANUAL: Pick<SelectProps, "message">;
