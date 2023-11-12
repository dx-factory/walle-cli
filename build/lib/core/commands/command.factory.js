"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __importDefault(require("../common/utils/factory"));
var command_errors_1 = require("./command.errors");
var init_1 = require("./init");
var make_1 = require("./make");
var sketch_1 = require("./sketch");
var service_factory_1 = __importDefault(require("../services/service.factory"));
var design_command_1 = require("./design/design.command");
var fetch_command_1 = require("./fetch/fetch.command");
/**
 * CommandFactory
 * @description
 * - A factory for creating commands
 */
var CommandFactory = /** @class */ (function (_super) {
    __extends(CommandFactory, _super);
    function CommandFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandFactory.getCommand = function (commandName) {
        if (commandName === "sketch")
            return this.sketchCommand;
        if (commandName === "make")
            return this.makeCommand;
        if (commandName === "init")
            return this.initCommand;
        if (commandName === "design")
            return this.designCommand;
        if (commandName === "fetch")
            return this.fetchCommand;
        else
            throw new Error(command_errors_1.CommandErrorCodes.COMMAND_NOT_FOUND);
    };
    Object.defineProperty(CommandFactory, "sketchCommand", {
        get: function () {
            return this.resolve(this.SketchCommand, function () { return new sketch_1.SketchCommand(service_factory_1.default.getConfigService); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandFactory, "makeCommand", {
        get: function () {
            return this.resolve(this.MakeCommand, function () { return new make_1.MakeCommand(service_factory_1.default.getManualService, service_factory_1.default.getPrototypeService, service_factory_1.default.getConfigService); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandFactory, "initCommand", {
        get: function () {
            return this.resolve(this.InitCommand, function () { return new init_1.InitCommand(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandFactory, "designCommand", {
        get: function () {
            return this.resolve(this.DesignCommand, function () { return new design_command_1.DesignCommand(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandFactory, "fetchCommand", {
        get: function () {
            return this.resolve(this.FetchCommand, function () { return new fetch_command_1.FetchCommand(service_factory_1.default.getConfigService); });
        },
        enumerable: false,
        configurable: true
    });
    return CommandFactory;
}(factory_1.default));
exports.default = CommandFactory;
