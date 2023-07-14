#!/usr/bin/env node

import ArgsProcessor from "./lib/core/args/args.processor";
import CommandFactory from "./lib/core/commands/command.factory";

function bootstrap() {
  const { command: commandName, args } = ArgsProcessor.getArgs();

  try {
    const command = CommandFactory.getCommand(commandName);
    command.execute(args);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
