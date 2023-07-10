export interface IConfig {
  get(key: string): any;
}

export interface Instruction {
  extension: string;
  trigger?: string;
  preffix?: string;
  name?: string;
}

export interface Manual {
  /**
   * Unique identifier for the manual.
   */
  ref: string;
  /**
   * If a Manual has a boolean for the folder property, it creates a folder to store the files created in the manual.
   */
  folder?: boolean;
  /**
   * Set of instructions to create the files in the manual.
   */
  instructions: Instruction[] | string;
}

export interface Prototype {
  ref: string;
  parts: string[];
  manual?: string;
}
