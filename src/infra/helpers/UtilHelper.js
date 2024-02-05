
class UtilHelper {

    static getResultByIndex(resultContainer) {

    }

    static isValidArray(input) {
        return input && input instanceof Array && input.length > 0;
    }

    static assignRouteHandler(instance, methodName) {
        return async (req, res) => {
            try {
                const result = await instance[methodName].call(instance, req, res);
                res.send(result);
            } catch (error) {
                console.log(error);
                const [, lineno, colno] = error.stack.match(/(\d+):(\d+)/);
                res.send({ message: error.message, file: error.stack, line: lineno });
            }
        };
    }

    static generateRandomString(prefix = "", suffix = "") {
        let randomString = Math.random().toString(36).substring(2, 7);
        const date = new Date();
        let dateString = `${date.getFullYear()}_${date.getMonth()}_${date.getDate()}`;
        return `${prefix}_${randomString}_${dateString}_${suffix}`;
    }

    static generateRandomNumber(from = 1, to = 100) {
        const randomNumber = Math.floor((Math.random() * to) + from);
        return randomNumber;
    }

    static appendChildPathIfAny(basePath, childPath) {
        if (childPath) {
            basePath += `/${childPath}`;
        }
        return basePath;
    }
}

export default UtilHelper;