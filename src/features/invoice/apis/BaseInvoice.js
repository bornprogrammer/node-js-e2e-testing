import BaseKlooApi from "../../../infra/BaseKlooApi.js";
import UtilHelper from "../../../infra/helpers/UtilHelper.js";

class BaseInvoice extends BaseKlooApi {

    constructor(path) {
        let invoicePath = UtilHelper.appendChildPathIfAny("v1/ap", path);
        super(invoicePath);
    }

}
export default BaseInvoice;