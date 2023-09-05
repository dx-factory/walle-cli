import { SelectProps } from "../../../ui/components/Selector/Selector.types";
import { AskOptions } from "../../../ui/components/TextField/TextField.types";

export const PROJECT_ENTRYPOINT_QUESTION: AskOptions = {
  message: "Which will be the entry point of your project?",
  placeholder: ".",
  validate: (value) => {
    if (value === "") return "The entry point can't be empty";
  },
};

export const GITIGNORE_QUESTION: SelectProps = {
  message: "Do you want to add the walle configuration file to .gitignore?",
  options: [
    { label: "Yes", value: true, hint: "Recommended" },
    { label: "No", value: false },
  ],
};
