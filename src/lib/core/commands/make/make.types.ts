export interface IMakeCommand {
  execute(args: string[]): void;
}

export interface DepuratedMake {
  name: string;
  extension: string;
  entryPoint: string;
}
