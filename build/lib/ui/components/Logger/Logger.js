"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var prompts_1 = require("@clack/prompts");
var severity_1 = require("../../common/severity");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.start = function (_a) {
        var type = _a.type, _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.message, message = _c === void 0 ? "" : _c;
        var formattedTitle = "".concat(severity_1.severities[type](title));
        (0, prompts_1.intro)(formattedTitle);
        message && prompts_1.log.message(severity_1.severities[type](message));
    };
    Logger.end = function (_a) {
        var title = _a.title;
        (0, prompts_1.outro)(title);
    };
    Logger.note = function (_a) {
        var type = _a.type, _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.message, message = _c === void 0 ? "" : _c;
        (0, prompts_1.note)(severity_1.severities[type](message), title);
    };
    Logger.error = function (_a) {
        var _b = _a.type, type = _b === void 0 ? severity_1.SeverityLevels.DEFAULT : _b, title = _a.title, _c = _a.message, message = _c === void 0 ? "" : _c;
        var formattedTitle = "".concat(severity_1.severities[type].bold(title), " ").concat(severity_1.severities[severity_1.SeverityLevels.ERROR](message));
        (0, prompts_1.outro)(formattedTitle);
    };
    return Logger;
}());
exports.Logger = Logger;
