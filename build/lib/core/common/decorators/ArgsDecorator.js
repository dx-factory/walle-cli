"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Decorator to process make command arguments
 */
function createArgsDecorator(preProcessArgs, postProcessArgs) {
    return function createMethodDecorator(target, methodName, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Perform pre-processing of arguments
            // ...
            var preprocessedArgs = preProcessArgs(args) || args;
            // Invoke the original method with the modified arguments
            var result = originalMethod.apply(this, preprocessedArgs);
            // Perform post-processing of the result
            // ...
            postProcessArgs();
            return result;
        };
    };
}
exports.default = createArgsDecorator;
