declare enum SeverityLevel {
    DEFAULT = "default",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
    SUCCESS = "success"
}
declare enum BgSeverityLevel {
    BG_DEFAULT = "bgDefault",
    BG_INFO = "bgInfo",
    BG_WARNING = "bgWarning",
    BG_ERROR = "bgError",
    BG_SUCCESS = "bgSuccess"
}
export declare const SeverityLevels: {
    DEFAULT: SeverityLevel.DEFAULT;
    INFO: SeverityLevel.INFO;
    WARNING: SeverityLevel.WARNING;
    ERROR: SeverityLevel.ERROR;
    SUCCESS: SeverityLevel.SUCCESS;
    BG_DEFAULT: BgSeverityLevel.BG_DEFAULT;
    BG_INFO: BgSeverityLevel.BG_INFO;
    BG_WARNING: BgSeverityLevel.BG_WARNING;
    BG_ERROR: BgSeverityLevel.BG_ERROR;
    BG_SUCCESS: BgSeverityLevel.BG_SUCCESS;
};
export type SeverityLevelsType = BgSeverityLevel | SeverityLevel;
export type Severities = Record<SeverityLevelsType, any>;
export declare const severities: Severities;
export {};
