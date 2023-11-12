"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SketchCommand = void 0;
var severity_1 = require("../../../ui/common/severity");
var Logger_1 = require("../../../ui/components/Logger/Logger");
var Spinner_1 = require("../../../ui/components/Spinner/Spinner");
var reader_1 = require("../../common/utils/file/reader");
var writer_1 = require("../../common/utils/file/writer");
var SketchCommand = /** @class */ (function () {
    function SketchCommand(configService) {
        this.configService = configService;
    }
    SketchCommand.prototype.depurate = function (args) {
        var _a;
        if (args.length < 1)
            throw new Error("Invalid number of arguments");
        var _b = args.slice(-2), prototypeRef = _b[0], name = _b[1];
        var existingPath = args.slice(0, -2).join("/");
        var customEntryPoint = "".concat(this.configService.getEntryPoint(), "/").concat(existingPath);
        if (!(0, reader_1.checkPathExists)(customEntryPoint))
            throw new Error("Invalid path ".concat(existingPath));
        var prototype = this.configService.getPrototype(prototypeRef);
        if (!prototype)
            throw new Error("Invalid prototype ".concat(prototypeRef));
        if ((!(prototype === null || prototype === void 0 ? void 0 : prototype.parts) || ((_a = prototype === null || prototype === void 0 ? void 0 : prototype.parts) === null || _a === void 0 ? void 0 : _a.length) === 0) && name)
            throw new Error("Cannot name a prototype without parts");
        return { prototype: prototype, name: name || prototypeRef, entryPoint: customEntryPoint || this.configService.getEntryPoint() };
    };
    SketchCommand.prototype.sketchPrototype = function (prototype, name, currentPath, initPath) {
        var _this = this;
        var _a;
        if (initPath === void 0) { initPath = this.configService.getEntryPoint(); }
        var partsPathName = currentPath === initPath ? name : prototype.ref;
        var partsPath = "".concat(currentPath, "/").concat(partsPathName);
        (0, writer_1.createDirectory)(currentPath, partsPathName);
        if (!(prototype === null || prototype === void 0 ? void 0 : prototype.parts) || ((_a = prototype === null || prototype === void 0 ? void 0 : prototype.parts) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return;
        else {
            prototype.parts.forEach(function (part) {
                _this.sketchPrototype(_this.configService.getPrototype(part), name, partsPath);
            });
        }
    };
    SketchCommand.prototype.execute = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, prototype, name, entryPoint;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.depurate(args), prototype = _a.prototype, name = _a.name, entryPoint = _a.entryPoint;
                        return [4 /*yield*/, Spinner_1.Spinner.wait({
                                startMessage: "Sketching ".concat(prototype.ref, " ").concat(name),
                                stopMessage: "Sketched!",
                                callback: function () { return _this.sketchPrototype(prototype, name, entryPoint, entryPoint); },
                            })];
                    case 1:
                        _b.sent();
                        Logger_1.Logger.note({ type: severity_1.SeverityLevels.DEFAULT, title: "Next steps", message: "Find your sketched prototype in ".concat(entryPoint).concat(name) });
                        return [2 /*return*/];
                }
            });
        });
    };
    return SketchCommand;
}());
exports.SketchCommand = SketchCommand;
