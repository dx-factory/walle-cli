/**
 * Decorator to process make command arguments
 */
export default function createArgsDecorator(preProcessArgs: Function, postProcessArgs?: Function): Function {
  return function createMethodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // Perform pre-processing of arguments
      // ...
      const preprocessedArgs = preProcessArgs(args) || args;

      // Invoke the original method with the modified arguments
      const result = originalMethod.apply(this, preprocessedArgs);

      // Perform post-processing of the result
      // ...
      postProcessArgs();

      return result;
    };
  };
}
