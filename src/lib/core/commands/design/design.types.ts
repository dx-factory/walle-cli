import { Instruction } from "../../common/types/instruction";

export interface SelectedManualDesign {
  ref?: string;
  folder?: boolean;
  defaultInstructions?: Instruction[];
}

export interface SelectedPrototypeDesign {
  ref?: string;
  parts?: string;
  manualRef?: string;
}

export const AvailableDesigns = {
  manual: "manual",
  prototype: "prototype",
} as const;

export type AvailableDesignsType = (typeof AvailableDesigns)[keyof typeof AvailableDesigns];

export type SelectedDesign = (SelectedManualDesign | SelectedPrototypeDesign) & { type: AvailableDesignsType };
