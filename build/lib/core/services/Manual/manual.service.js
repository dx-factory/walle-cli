"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualService = void 0;
var copy_1 = __importDefault(require("../../file/copy"));
var writer_1 = require("../../file/writer");
var config_constants_1 = require("../config/config.constants");
var ManualService = /** @class */ (function () {
    function ManualService(configService) {
        this.configService = configService;
    }
    ManualService.prototype.getManual = function (manualRef) {
        var manual = this.configService.getManual(manualRef);
        if (!manual)
            throw new Error("Invalid manual ".concat(manualRef));
        return manual;
    };
    ManualService.prototype.getInstructionByTrigger = function (manual, trigger) {
        var instructions = manual.instructions;
        var instruction = instructions.find(function (_a) {
            var instructionTrigger = _a.trigger;
            return instructionTrigger === trigger;
        });
        if (!instruction)
            throw new Error("Instruction not found for trigger ".concat(trigger));
        return instruction;
    };
    ManualService.prototype.loadManualMandatoryInstructions = function (manual, _a) {
        var path = _a.path, name = _a.name;
        var instructions = manual.instructions;
        instructions.forEach(function (_a) {
            var extension = _a.extension, fileName = _a.name, trigger = _a.trigger, preffix = _a.preffix, template = _a.template;
            if (!trigger) {
                (0, writer_1.createFile)(path, "".concat(fileName || name).concat(preffix ? ".".concat(preffix) : "", ".").concat(extension));
                if (!template)
                    return;
                (0, copy_1.default)("".concat(config_constants_1.WALLE_CONFIG_TEMPLATES_PATH, "/").concat(template, ".txt"), "".concat(path, "/").concat(fileName || name).concat(preffix ? ".".concat(preffix) : "", ".").concat(extension), {
                    ref: /%%(.*?)%%/g,
                    value: name,
                });
            }
        });
    };
    ManualService.prototype.loadManualInstructions = function (manual, _a) {
        var _this = this;
        var path = _a.path, name = _a.name, _b = _a.triggers, triggers = _b === void 0 ? [] : _b, template = _a.template;
        if (typeof manual.instructions === "string") {
            (0, writer_1.createFile)("".concat(path, "/").concat(path, ".").concat(manual.instructions), "");
        }
        if (manual.instructions instanceof Array) {
            triggers.forEach(function (trigger) {
                var _a = _this.getInstructionByTrigger(manual, trigger), extension = _a.extension, suffix = _a.preffix, fileName = _a.name, template = _a.template;
                var resultingFileName = "".concat(fileName || name).concat(suffix ? ".".concat(suffix) : "", ".").concat(extension);
                (0, writer_1.createFile)(path, resultingFileName, "");
                if (!template)
                    return;
                (0, copy_1.default)("".concat(config_constants_1.WALLE_CONFIG_TEMPLATES_PATH, "/").concat(template, ".txt"), "".concat(path, "/").concat(resultingFileName), {
                    ref: /%%(.*?)%%/g,
                    value: name,
                });
            });
            this.loadManualMandatoryInstructions(manual, { path: path, name: name });
        }
    };
    ManualService.prototype.containsTriggers = function (manual, triggers) {
        var instructions = manual.instructions;
        var manualTriggers = instructions.map(function (instruction) { return instruction.trigger; });
        return triggers.every(function (trigger) { return manualTriggers.includes(trigger); });
    };
    ManualService.prototype.manualExists = function (manualRef) {
        try {
            this.getManual(manualRef);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    ManualService.prototype.buildManual = function (manual) {
        this.configService.setManual(manual);
    };
    ManualService.prototype.getManuals = function () {
        return this.configService.get("manuals");
    };
    return ManualService;
}());
exports.ManualService = ManualService;
