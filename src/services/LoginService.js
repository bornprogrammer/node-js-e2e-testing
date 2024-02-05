import config from "config";
import HttpService from "../infra/HttpService.js";

class LoginService {
    apiPath = "api/v1/oauth/token";
    async login() {
        const credentials = config.get("login");
        const url = `${config.get("base_url")}/${this.apiPath}`;
        const payload = { username: credentials.username, password: credentials.password, grant_type: "password", client_id: credentials.client_id, client_secret: credentials.client_secret, scope: "*" };
        const loginResult = await HttpService(url).setHeaders({ "Content-Type": "application/x-www-form-urlencoded" }).post(payload);
        return loginResult;
    }

}

export default new LoginService;