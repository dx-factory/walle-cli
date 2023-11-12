"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var args_errors_1 = require("./args.errors");
var ArgsProcessor = /** @class */ (function () {
    function ArgsProcessor() {
    }
    ArgsProcessor.getArgs = function () {
        var args = process.argv.slice(2);
        if (args.length === 0)
            throw new Error(args_errors_1.ArgsErrorCodes.NO_ARGS_PROVIDED);
        return { command: args[0], args: args.slice(1) };
    };
    ArgsProcessor.filterSemanticFromArgs = function (args) {
        var semantic = args.filter(function (arg) { return !arg.startsWith("-"); });
        if (!semantic || semantic.length < 2)
            throw new Error(args_errors_1.ArgsErrorCodes.NO_SEMANTIC_PROVIDED);
        return semantic;
    };
    ArgsProcessor.getTriggersFromArgs = function (args) {
        return args.filter(function (arg) { return arg.startsWith("-"); }).map(function (arg) { return arg.slice(1); });
    };
    return ArgsProcessor;
}());
exports.default = ArgsProcessor;
