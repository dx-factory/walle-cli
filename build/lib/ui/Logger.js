"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var prompts_1 = require("@clack/prompts");
var Logger = function (_a) {
    var type = _a.type, message = _a.message;
    if (type === "intro") {
        (0, prompts_1.intro)(message);
    }
    else {
        (0, prompts_1.outro)(message);
    }
};
exports.Logger = Logger;
