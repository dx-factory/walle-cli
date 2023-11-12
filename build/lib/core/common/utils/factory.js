"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.resolve = function (obj, factory) {
        if (!obj)
            obj = factory();
        return obj;
    };
    return Factory;
}());
exports.default = Factory;
