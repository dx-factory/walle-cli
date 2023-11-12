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
var config_service_1 = require("./config/config.service");
var manual_1 = require("./manual");
var prototype_1 = require("./prototype");
// TODO: Find solution to configService dependency
var ServiceFactory = /** @class */ (function (_super) {
    __extends(ServiceFactory, _super);
    function ServiceFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ServiceFactory, "getConfigService", {
        get: function () {
            return this.resolve(this.configService, function () { return new config_service_1.ConfigService(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceFactory, "getManualService", {
        get: function () {
            return this.resolve(this.manualService, function () { return new manual_1.ManualService(new config_service_1.ConfigService()); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceFactory, "getPrototypeService", {
        get: function () {
            return this.resolve(this.prototypeService, function () { return new prototype_1.PrototypeService(new config_service_1.ConfigService()); });
        },
        enumerable: false,
        configurable: true
    });
    return ServiceFactory;
}(factory_1.default));
exports.default = ServiceFactory;
