import HttpService from "./HttpService.js";
import userSession from "../services/UserSession.js";

class BaseKlooApi {

    httpService;
    isExceptionToBeThrownWhenAPIFailed = false;

    constructor(path) {
        this.httpService = HttpService("").setKlooAPIBaseUrl().setIsExceptionToBeThrownWhenAPIFailed(this.isExceptionToBeThrownWhenAPIFailed).setPath(path);
        this.httpService.setBearerToken(userSession.getToken());
    }

    setIsExceptionToBeThrownWhenAPIFailed(isExceptionToBeThrownWhenAPIFailed) {
        this.setIsExceptionToBeThrownWhenAPIFailed(isExceptionToBeThrownWhenAPIFailed);
        return this;
    }

    async create(payload) {
        const result = await this.httpService.post(payload);
        return result;
    }

    setPaths(paths) {
        this.httpService.setPath(paths);
        return this;
    }

    setQueryStr(items) {
        this.httpService.setQueryStr(items);
        return this;
    }

    enableLogger() {
        this.httpService.enableLogger();
        return this;
    }

    async update(payload) {
        const result = await this.httpService.put(payload);
        return result;
    }

    async get() {
        const result = await this.httpService.get();
        return result;
    }

    async delete(payload) {
        const result = await this.httpService.delete(payload);
        return result;
    }

    async patch(payload) {
        const result = await this.httpService.patch(payload);
        return result;
    }

    async selectRandomId() {
        const result = await this.get();
        return result.getCollection().selectRandomId();
    }

    async selectRandomIdByKeyNameValue() {
        const result = await this.get();
        return result.getCollection().selectRandomId("value");
    }

    async selectRandomObject() {
        const result = await this.get();
        return result.getCollection().random();
    }

    async selectObject(keyName, value) {
        const result = await this.get();
        return result.getCollection().byValue(keyName, value);
    }

}

export default BaseKlooApi;