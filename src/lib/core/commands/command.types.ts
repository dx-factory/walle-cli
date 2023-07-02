export enum Commands {
  MAKE = "make",
  DELETE = "delete",
}

export interface ICommand {
  execute(args: string[]): void;
}
