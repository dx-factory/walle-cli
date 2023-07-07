export enum Commands {
  MAKE = "make",
  SKETCH = "sketch",
}

export interface ICommand {
  execute(args: string[]): void;
}
