
class MethodChainingHandler {

    results = {};
    testCases = []; // each object structure { className: GetFieldList,instance:GetFieldList(), methodName: "getFieldList", methodParams: {},resultAs:"",toBeContinuedIfAnyError:true|false };

    constructor(...testCases) {
        this.testCases = testCases[0];
    }

    async execute() {
        let lastInvokedMethodResult = null;
        const firstParam = this.testCases[0].methodParams ?? {};
        for (const testCase of this.testCases) {
            if (testCase) {
                const methodParams = { firstParam, methodParams: testCase.methodParams ?? {}, results: this.results, lastInvokedMethodResult };
                const methodName = testCase.methodName;
                const objectContext = testCase.instance ?? testCase.className.call();
                lastInvokedMethodResult = await objectContext[methodName].call(objectContext, methodParams);
                if (this.isToBeTerminated(lastInvokedMethodResult, testCase)) {
                    throw new Error(`There is some error while calling the method ${methodName}`);
                }
                this.results[testCase.resultAs ?? methodName] = lastInvokedMethodResult ?? {};
            }
        }
        return this.results;
    }

    isToBeTerminated(lastInvokedMethodResult, testCase) {
        return ((testCase.toBeContinuedIfAnyError === undefined || testCase.toBeContinuedIfAnyError === false) && (!lastInvokedMethodResult || lastInvokedMethodResult.isError));
    }

    async executeAll(numberOfTimes) {
        const promiseIterable = [];
        for (let index = 0; index < numberOfTimes; index++) {
            promiseIterable.push(this.execute());
        }
        Promise.allSettled(promiseIterable);
    }
}

export default (...testCases) => new MethodChainingHandler(testCases);