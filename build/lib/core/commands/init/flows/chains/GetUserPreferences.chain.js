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
exports.GetUserPreferencesChain = void 0;
var SequentialChain_1 = require("../../../../common/utils/chains/SequentialChain/SequentialChain");
var UserEntrypoint_handler_1 = require("../handlers/UserEntrypoint.handler");
var UserGitIgnore_handler_1 = require("../handlers/UserGitIgnore.handler");
var GetUserPreferencesChain = /** @class */ (function (_super) {
    __extends(GetUserPreferencesChain, _super);
    function GetUserPreferencesChain() {
        var _this = _super.call(this) || this;
        _this.handlers = [new UserEntrypoint_handler_1.UserEntrypointHandler(), new UserGitIgnore_handler_1.UserGitIgnoreHandler()];
        return _this;
    }
    return GetUserPreferencesChain;
}(SequentialChain_1.SequentialChain));
exports.GetUserPreferencesChain = GetUserPreferencesChain;
