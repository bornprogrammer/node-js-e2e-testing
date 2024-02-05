import config from "config";
import HttpService from "../infra/HttpService.js";

class BaseAPI {
    httpService;
    constructor(path) {
        const url = `${config.get("base_url")}/${path}`;
        this.httpService = HttpService(url);
    }

    call() {

    }
}

export default BaseAPI;


