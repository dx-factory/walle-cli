#!/usr/bin/env node

import { spinner } from "@clack/prompts";
import ArgsProcessor from "./lib/core/args/args.processor";
import CommandFactory from "./lib/core/commands/command.factory";
import { SeverityLevels } from "./lib/ui/common/severity";
import { Logger } from "./lib/ui/components/Logger/Logger";

async function bootstrap() {
  const { command: commandName, args } = ArgsProcessor.getArgs();

  try {
    const command = CommandFactory.getCommand(commandName);
    Logger.start({ type: SeverityLevels.INFO, title: `${commandName.toUpperCase()} STARTED` });
    await command.execute(args);
  } catch (error: any) {
    Logger.error({ type: SeverityLevels.ERROR, title: "ERROR:", message: error.message });
    process.exit(1);
  }
}

bootstrap();
