"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
var fs = __importStar(require("fs"));
var config_constants_1 = require("./config.constants");
var reader_1 = require("../../file/reader");
var writer_1 = require("../../file/writer");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.getConfig = function () {
        var config = JSON.parse(fs.readFileSync(config_constants_1.WALLE_CONFIG_FILE_PATH, "utf8"));
        return config;
    };
    ConfigService.prototype.saveConfig = function (configState) {
        fs.writeFileSync(config_constants_1.WALLE_CONFIG_FILE_PATH, JSON.stringify(configState, null, 2));
    };
    ConfigService.prototype.get = function (key) {
        var config = this.getConfig();
        return config[key];
    };
    ConfigService.prototype.set = function (key, value) {
        var config = this.getConfig();
        config[key] = value;
        this.saveConfig(config);
    };
    ConfigService.prototype.validate = function (config) {
        var configKeys = Object.keys(config);
        var validKeys = Object.keys(config_constants_1.WALLE_CONFIG_DEFAULT_STATE);
        return configKeys.every(function (key) { return validKeys.includes(key); });
    };
    ConfigService.prototype.getPrototype = function (prototypeRef) {
        var prototypes = this.get("prototypes");
        var prototype = prototypes.find(function (part) { return part.ref === prototypeRef; });
        if (!prototype)
            throw new Error("Invalid prototype");
        return prototype;
    };
    ConfigService.prototype.getManual = function (manualRef) {
        var manuals = this.get("manuals");
        var manual = manuals.find(function (part) { return part.ref === manualRef; });
        if (!manual)
            throw new Error("Invalid manual");
        return manual;
    };
    ConfigService.prototype.setManual = function (manual) {
        var manuals = this.get("manuals");
        this.set("manuals", __spreadArray(__spreadArray([], manuals, true), [manual], false));
    };
    ConfigService.prototype.setPrototype = function (prototype) {
        var prototypes = this.get("prototypes");
        this.set("prototypes", __spreadArray(__spreadArray([], prototypes, true), [prototype], false));
    };
    ConfigService.prototype.getEntryPoint = function () {
        return this.get("entryPoint");
    };
    ConfigService.prototype.setEntryPoint = function (entryPoint) {
        var existsConfig = (0, reader_1.checkPathExists)(config_constants_1.WALLE_CONFIG_FILE_PATH);
        if (!existsConfig)
            (0, writer_1.createFile)(".", config_constants_1.WALLE_CONFIG_FILENAME, JSON.stringify(config_constants_1.WALLE_CONFIG_DEFAULT_STATE, null, 2));
        this.set("entryPoint", entryPoint);
    };
    ConfigService.prototype.ignoreConfigFile = function (ignore) {
        if (!ignore)
            return;
        var gitIgnoreExists = (0, reader_1.checkPathExists)("./.gitignore");
        if (gitIgnoreExists)
            (0, reader_1.addTextToFile)(".gitignore", config_constants_1.WALLE_CONFIG_FILENAME);
        else
            throw new Error("Gitignore file not found");
    };
    ConfigService.prototype.getTemplate = function (templateRef) {
        if (!(0, reader_1.checkPathExists)("./.walle/templates/".concat(templateRef, ".txt")))
            throw new Error("Template not found");
        return fs.readFileSync("./.walle/templates/".concat(templateRef, ".txt"), "utf8");
    };
    return ConfigService;
}());
exports.ConfigService = ConfigService;
