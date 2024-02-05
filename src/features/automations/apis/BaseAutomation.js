import BaseKlooApi from "../../../infra/BaseKlooApi.js";
import UtilHelper from "../../../infra/helpers/UtilHelper.js";

class BaseAutomation extends BaseKlooApi {

    constructor(path) {
        const baseAutomationPath = UtilHelper.appendChildPathIfAny("v1/smart-approval/automations", path);
        super(baseAutomationPath);
    }

}

export default BaseAutomation;