import BaseKlooApi from "../../../infra/BaseKlooApi.js";
import UtilHelper from "../../../infra/helpers/UtilHelper.js";

class BestSmartApprovalV3 extends BaseKlooApi {

    constructor(path) {
        const baseV3Path = UtilHelper.appendChildPathIfAny("v3/smart-approval", path)
        super(baseV3Path);
    }
}

export default BestSmartApprovalV3;