import BaseKlooApi from "../../../infra/BaseKlooApi.js";
import UtilHelper from "../../../infra/helpers/UtilHelper.js";


class BaseOrganization extends BaseKlooApi {

    constructor(path) {
        const userPath = UtilHelper.appendChildPathIfAny("v1/organizations", path);
        super(userPath);
    }
}

export default BaseOrganization;