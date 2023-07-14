#!/usr/bin/env node

import { spinner } from "@clack/prompts";
import ArgsProcessor from "./lib/core/args/args.processor";
import CommandFactory from "./lib/core/commands/command.factory";
import { SeverityLevels, severities } from "./lib/ui/common/severity";
import { Logger } from "./lib/ui/components/Logger/Logger";

async function bootstrap() {
  const { command: commandName, args } = ArgsProcessor.getArgs();

  try {
    const command = CommandFactory.getCommand(commandName);
    Logger.start({ type: SeverityLevels.INFO, title: "WALLE CLI" });
    await command.execute(args);
    Logger.end({
      type: SeverityLevels.INFO,
      title: `For more information, visit ${severities[SeverityLevels.INFO]("https://walle.dxfactory.org")}`,
    });
  } catch (error: any) {
    Logger.error({ type: SeverityLevels.ERROR, title: "ERROR:", message: error.message });
    process.exit(1);
  }
}

bootstrap();
