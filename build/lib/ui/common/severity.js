"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.severities = exports.SeverityLevels = void 0;
var chalk_1 = __importDefault(require("chalk"));
var SeverityLevel;
(function (SeverityLevel) {
    SeverityLevel["DEFAULT"] = "default";
    SeverityLevel["INFO"] = "info";
    SeverityLevel["WARNING"] = "warning";
    SeverityLevel["ERROR"] = "error";
    SeverityLevel["SUCCESS"] = "success";
})(SeverityLevel || (SeverityLevel = {}));
var BgSeverityLevel;
(function (BgSeverityLevel) {
    BgSeverityLevel["BG_DEFAULT"] = "bgDefault";
    BgSeverityLevel["BG_INFO"] = "bgInfo";
    BgSeverityLevel["BG_WARNING"] = "bgWarning";
    BgSeverityLevel["BG_ERROR"] = "bgError";
    BgSeverityLevel["BG_SUCCESS"] = "bgSuccess";
})(BgSeverityLevel || (BgSeverityLevel = {}));
exports.SeverityLevels = __assign(__assign({}, BgSeverityLevel), SeverityLevel);
var defaultLevel = chalk_1.default.gray;
var info = chalk_1.default.cyan;
var warning = chalk_1.default.yellow;
var error = chalk_1.default.red;
var success = chalk_1.default.green;
var bgDefaultLevel = chalk_1.default.bgGray.white;
var bgInfo = chalk_1.default.bgCyan.white;
var bgWarning = chalk_1.default.bgYellow;
var bgError = chalk_1.default.bgRed.white;
var bgSuccess = chalk_1.default.bgGreen.white;
exports.severities = {
    default: defaultLevel,
    info: info,
    warning: warning,
    error: error,
    success: success,
    bgDefault: bgDefaultLevel,
    bgInfo: bgInfo,
    bgWarning: bgWarning,
    bgError: bgError,
    bgSuccess: bgSuccess,
};
