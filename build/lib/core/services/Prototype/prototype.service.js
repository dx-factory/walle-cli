"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrototypeService = void 0;
var PrototypeService = /** @class */ (function () {
    function PrototypeService(configService) {
        this.configService = configService;
    }
    PrototypeService.prototype.getPrototype = function (prototypeRef) {
        var prototype = this.configService.getPrototype(prototypeRef);
        if (!prototype)
            throw new Error("Invalid prototype ".concat(prototypeRef));
        return prototype;
    };
    PrototypeService.prototype.getPrototypeManual = function (prototypeRef) {
        var prototype = this.getPrototype(prototypeRef);
        if (!prototype.manual)
            throw new Error("Prototype missing manual");
        var manual = this.configService.getManual(prototype.manual);
        if (!manual)
            throw new Error("Invalid manual ".concat(prototype.manual));
        return manual;
    };
    PrototypeService.prototype.getPrototypes = function () {
        return this.configService.get("prototypes");
    };
    PrototypeService.prototype.prototypeExists = function (prototypeRef) {
        try {
            this.getPrototype(prototypeRef);
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    PrototypeService.prototype.buildPrototype = function (prototype) {
        return this.configService.setPrototype(prototype);
    };
    return PrototypeService;
}());
exports.PrototypeService = PrototypeService;
