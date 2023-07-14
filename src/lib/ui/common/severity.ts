import chalk from "chalk";

enum SeverityLevel {
  DEFAULT = "default",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
}

enum BgSeverityLevel {
  BG_DEFAULT = "bgDefault",
  BG_INFO = "bgInfo",
  BG_WARNING = "bgWarning",
  BG_ERROR = "bgError",
  BG_SUCCESS = "bgSuccess",
}

export const SeverityLevels = { ...BgSeverityLevel, ...SeverityLevel };

export type SeverityLevelsType = BgSeverityLevel | SeverityLevel;

export type Severities = Record<SeverityLevelsType, any>;

const defaultLevel = chalk.gray;
const info = chalk.cyan;
const warning = chalk.yellow;
const error = chalk.red;
const success = chalk.green;

const bgDefaultLevel = chalk.bgGray.white;
const bgInfo = chalk.bgCyan.white;
const bgWarning = chalk.bgYellow;
const bgError = chalk.bgRed.white;
const bgSuccess = chalk.bgGreen.white;

export const severities: Severities = {
  default: defaultLevel,
  info,
  warning,
  error,
  success,
  bgDefault: bgDefaultLevel,
  bgInfo,
  bgWarning,
  bgError,
  bgSuccess,
};
