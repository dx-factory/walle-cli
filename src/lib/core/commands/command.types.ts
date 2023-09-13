export const Commands = {
  make: "make",
  sketch: "sketch",
  init: "init",
  design: "design",
} as const;

export type Command = (typeof Commands)[keyof typeof Commands];

export interface ICommand {
  execute(args: string[]): Promise<void>;
}
