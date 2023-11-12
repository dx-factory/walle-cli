"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeArgsPreprocessing = exports.makeArgsPreprocessing = void 0;
var args_processor_1 = __importDefault(require("../../../args/args.processor"));
var ArgsDecorator_1 = __importDefault(require("../../../common/decorators/ArgsDecorator"));
var reader_1 = require("../../../file/reader");
/**
 * Decorator to process make command arguments
 */
function makeArgsPreprocessing() {
    var args = process.argv.slice(2);
    var triggers = args_processor_1.default.getTriggersFromArgs(args);
    var semantic = args_processor_1.default.filterSemanticFromArgs(args);
    var _a = semantic.slice(-2), prototypeRef = _a[0], name = _a[1];
    var existingPath = semantic.slice(0, -1).join("/");
    var customEntryPoint = "".concat(this.config.getEntryPoint(), "/").concat(existingPath);
    if (!(0, reader_1.checkPathExists)(customEntryPoint))
        throw new Error("Invalid path ".concat(existingPath));
    var prototype = this.prototypeService.getPrototype(prototypeRef);
    var manual = this.prototypeService.getPrototypeManual(prototypeRef);
    var validTriggers = this.manualService.containsTriggers(manual, triggers);
    if (!validTriggers)
        throw new Error("Invalid triggers for manual ".concat(prototype.manual));
    return { name: name, manual: manual, triggers: triggers, entryPoint: customEntryPoint || this.config.getEntryPoint() };
}
exports.makeArgsPreprocessing = makeArgsPreprocessing;
exports.MakeArgsPreprocessing = (0, ArgsDecorator_1.default)(makeArgsPreprocessing);
