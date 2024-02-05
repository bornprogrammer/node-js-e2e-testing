import BaseKlooApi from "../../../infra/BaseKlooApi.js";
import UtilHelper from "../../../infra/helpers/UtilHelper.js";


class BaseUser extends BaseKlooApi {

    constructor(path) {
        const userPath = UtilHelper.appendChildPathIfAny("v1/users", path);
        super(userPath);
    }
}

export default BaseUser;