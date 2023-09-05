export type TextFieldValue = string | number | boolean;

export interface AskOptions {
  message: string;
  placeholder?: string;
  defaultValue?: string;
  validate?: (value: string) => string | void;
}
