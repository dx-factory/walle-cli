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
exports.DesignInstructionsChain = void 0;
var CancelableLoopChain_1 = require("../../../../common/utils/chains/CancelableLoopChain/CancelableLoopChain");
var DesignInstructionHandler_1 = require("../handlers/DesignInstructionHandler");
var DesignInstructionsChain = /** @class */ (function (_super) {
    __extends(DesignInstructionsChain, _super);
    function DesignInstructionsChain() {
        var _this = _super.call(this) || this;
        _this.handlers = [new DesignInstructionHandler_1.DesignInstructionHandler()];
        return _this;
    }
    return DesignInstructionsChain;
}(CancelableLoopChain_1.CancelableLoopChain));
exports.DesignInstructionsChain = DesignInstructionsChain;
