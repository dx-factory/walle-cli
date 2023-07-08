export interface IInitCommand {
  execute(args: string[]): void;
}

export interface DepuratedInitArgs {
  entryPoint: string;
}
