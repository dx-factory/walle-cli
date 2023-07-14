export enum Commands {
  MAKE = "make",
  SKETCH = "sketch",
  INIT = "init",
}

export interface ICommand {
  execute(args: string[]): Promise<void>;
}
