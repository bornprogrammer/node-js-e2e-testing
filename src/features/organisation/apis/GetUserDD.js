import userSession from "../../../services/UserSession.js";
import BaseOrganization from "./BaseOrganization.js";

class GetUserDD extends BaseOrganization {

    constructor() {
        const path = userSession.getLoggedInOrgId();
        super(`${path}/users/select-dropdown`);
    }

    async get() {
        const result = await this.httpService.setResponseTransformerCallback((responseData) => {
            return responseData.result.data;
        }).get();
        return result;
    }

}

export default () => new GetUserDD();