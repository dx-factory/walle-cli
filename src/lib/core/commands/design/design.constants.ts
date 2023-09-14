import { MultiSelectProps } from "../../../ui/components/MultiSelect/MultiSelect.types";
import { SelectProps } from "../../../ui/components/Selector/Selector.types";
import { AskOptions } from "../../../ui/components/TextField/TextField.types";
import ServiceFactory from "../../services/service.factory";

/**
 * Design Manual questions
 */
export const ADD_INSTRUCTIONS_QUESTION: SelectProps = {
  message: "Do you want to create an instruction for this manual?",
  options: [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ],
};

export const SET_INSTRUCTION_EXTENSION_QUESTION: AskOptions = {
  message: "Set your file extension:",
  placeholder: "js, ts, go, cpp...",
  optional: true,
};

export const SET_INSTRUCTION_FILENAME_QUESTION: AskOptions = {
  message: "Specify your fileName name:",
  placeholder: "index, main, app...",
  optional: true,
};

export const SET_INSTRUCTION_PREFFIX_QUESTION: AskOptions = {
  message: "Specify the suffix:",
  placeholder: "styles, types, api...",
  optional: true,
};

export const SET_INSTRUCTION_TRIGGER_QUESTION: AskOptions = {
  message: "Specify the trigger:",
  optional: true,
};

export const SET_MANUAL_REFERENCE_QUESTION: AskOptions = {
  message: "Enter the manual reference name:",
  placeholder: "module, ui, component...",
  validate: (value) => {
    if (!value.length) return "Manual reference name cannot be empty.";
    if (ServiceFactory.getManualService.manualExists(value)) return "Manual already exists. Choose another reference name!";
  },
};

export const SET_MANUAL_FOLDER_QUESTION: SelectProps = {
  message: "Do you want to create a folder for this manual?",
  options: [
    {
      label: "Yes",
      value: true,
      hint: "A folder will be created with the same name as the manual reference to wrap all files.",
    },
    {
      label: "No",
      value: false,
    },
  ],
};

/**
 * Design Prototype questions
 */

export const SET_PROTOTYPE_REFERENCE_QUESTION: AskOptions = {
  message: "Enter the prototype reference name:",
  placeholder: "module, ui, component...",
  validate: (value) => {
    if (!value.length) return "Prototype reference name cannot be empty.";
    if (ServiceFactory.getPrototypeService.prototypeExists(value)) return "Prototype already exists. Choose another reference name!";
  },
};

export const SET_PROTOTYPE_PART_QUESTION: Omit<MultiSelectProps, "options"> = {
  message: "Select which parts you want to add to this prototype:",
  required: false,
};
