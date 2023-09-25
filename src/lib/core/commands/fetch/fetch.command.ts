import axios from "axios";
import { Spinner } from "../../../ui/components/Spinner/Spinner";
import { ICommand } from "../command.types";
import { ConfigService } from "../../services/config/config.service";
import { WalleConfig } from "../../common/types/config";
import { Selector } from "../../../ui/components/Selector/Selector";

export class FetchCommand implements ICommand {
  constructor(private readonly configService: ConfigService) {}

  depurateArgs(args: string[]): string {
    if (args.length !== 1) throw new Error("Invalid number of arguments");
    return args[0];
  }

  async execute(args: string[]): Promise<void> {
    const configUrl = this.depurateArgs(args);

    const currentConfig = this.configService.getConfig();

    if (currentConfig) {
      const override = await Selector.select({
        message: "A config already exists, do you want to overwrite it?",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      });
      if (!override) return;
    }

    // Fetch config from URL
    const fetchConfig = async (url: string): Promise<any> => {
      const response = await axios.get(url);
      return response.data;
    };

    const fetchedConfig = await Spinner.wait({
      startMessage: "Fetching config",
      stopMessage: "Config fetched!",
      callback: async () => await fetchConfig(configUrl),
    });

    // Validate config
    const isValidConfig = this.configService.validate(fetchedConfig as object);
    if (!isValidConfig) throw new Error("Invalid config, please fetch a valid config");

    // Save config
    await Spinner.wait({
      startMessage: "Saving config",
      stopMessage: "Config saved!",
      callback: () => this.configService.saveConfig(fetchedConfig as WalleConfig),
    });
  }
}
