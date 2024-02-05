import BaseE2E from "../../../infra/BaseE2E.js";
import MethodChainingHandler from "../../../infra/MethodChainingHandler.js";
import CreateInvoice from "../apis/CreateInvoice.js";

class CreateInvoiceTest extends BaseE2E {

    /**
     * 
     * @returns should test the simple create invoice
     */
    async createSimpleInvoice() {
        const createInvoice = { className: CreateInvoice, methodName: "createRandom", methodParams: {} };
        const result = await MethodChainingHandler(createInvoice).execute();
        return result;
    }

}

export default new CreateInvoiceTest();