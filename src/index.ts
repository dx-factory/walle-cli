import ArgsProcessor from "./lib/core/args/args.processor";
import CommandFactory from "./lib/core/commands/command.factory";
import Config from "./lib/core/config/config";

function bootstrap() {
  const { command: commandName, args } = ArgsProcessor.getArgs();

  try {
    const command = CommandFactory.sketchCommand;
    command.execute(args);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
