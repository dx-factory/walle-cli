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
var factory_1 = __importDefault(require("../../../common/utils/factory"));
var DesignInstructions_chain_1 = require("./chains/DesignInstructions.chain");
var DesignManual_chain_1 = require("./chains/DesignManual.chain");
var DesignPrototype_chain_1 = require("./chains/DesignPrototype.chain");
var PickDesignType_chain_1 = require("./chains/PickDesignType.chain");
var DesignChainFactory = /** @class */ (function (_super) {
    __extends(DesignChainFactory, _super);
    function DesignChainFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DesignChainFactory, "pickDesignTypeChain", {
        get: function () {
            return this.resolve(this.PickDesignTypeChain, function () { return new PickDesignType_chain_1.PickDesignTypeChain(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DesignChainFactory, "designManualChain", {
        get: function () {
            return this.resolve(this.DesignManualChain, function () { return new DesignManual_chain_1.DesignManualChain(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DesignChainFactory, "designPrototypeChain", {
        get: function () {
            return this.resolve(this.DesignPrototypeChain, function () { return new DesignPrototype_chain_1.DesignPrototypeChain(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DesignChainFactory, "designInstructionsChain", {
        get: function () {
            return this.resolve(this.DesignInstructionsChain, function () { return new DesignInstructions_chain_1.DesignInstructionsChain(); });
        },
        enumerable: false,
        configurable: true
    });
    return DesignChainFactory;
}(factory_1.default));
exports.default = DesignChainFactory;
