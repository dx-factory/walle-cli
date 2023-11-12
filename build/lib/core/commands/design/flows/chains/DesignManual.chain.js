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
exports.DesignManualChain = void 0;
var SequentialChain_1 = require("../../../../common/utils/chains/SequentialChain/SequentialChain");
var BuildManualHandler_1 = require("../handlers/BuildManualHandler");
var DesignManualHandler_1 = require("../handlers/DesignManualHandler");
var DesignManualInstructionsHandler_1 = require("../handlers/DesignManualInstructionsHandler");
var DesignManualChain = /** @class */ (function (_super) {
    __extends(DesignManualChain, _super);
    function DesignManualChain() {
        var _this = _super.call(this) || this;
        _this.handlers = [new DesignManualHandler_1.DesignManualHandler(), new DesignManualInstructionsHandler_1.DesignManualInstructionsHandler(), new BuildManualHandler_1.BuildManualHandler()];
        return _this;
    }
    return DesignManualChain;
}(SequentialChain_1.SequentialChain));
exports.DesignManualChain = DesignManualChain;
