export type SelectValue = string | number | boolean;

export interface SelectorOption {
  label: string;
  value: SelectValue;
  hint?: string;
}

export interface SelectProps {
  message: string;
  options: SelectorOption[];
}
