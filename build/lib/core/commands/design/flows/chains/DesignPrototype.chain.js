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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPrototypeChain = void 0;
var SequentialChain_1 = require("../../../../common/utils/chains/SequentialChain/SequentialChain");
var BuildPrototypeHandler_1 = require("../handlers/BuildPrototypeHandler");
var DesignPrototypeHandler_1 = require("../handlers/DesignPrototypeHandler");
var DesignPrototypeChain = /** @class */ (function (_super) {
    __extends(DesignPrototypeChain, _super);
    function DesignPrototypeChain() {
        var _this = _super.call(this) || this;
        _this.handlers = [new DesignPrototypeHandler_1.DesignPrototypeHandler(), new BuildPrototypeHandler_1.BuildPrototypeHandler()];
        return _this;
    }
    return DesignPrototypeChain;
}(SequentialChain_1.SequentialChain));
exports.DesignPrototypeChain = DesignPrototypeChain;
