import BaseKlooApi from "../../../infra/BaseKlooApi.js";
import UtilHelper from "../../../infra/helpers/UtilHelper.js";

class BaseAccountingIntegration extends BaseKlooApi {

    constructor(path) {
        const aiPath = UtilHelper.appendChildPathIfAny("v1/accounting-integrations", path);
        super(aiPath);
    }
}

export default BaseAccountingIntegration;