import GetAccountPayableCategoryList from "../../accounting-integrations/apis/GetAccountPayableCategoryList.js";
import GetUserDD from "../../organisation/apis/GetUserDD.js";
import GetCurrency from "../../user/apis/GetCurrency.js";
import BaseInvoice from "./BaseInvoice.js";
import CreateInvoiceRandomPayloadBuilder from "./CreateInvoiceRandomPayloadBuilder.js";
import GetSupplier from "./GetSupplier.js";

/**
 * create as many method as many scenario you want to test for invoice creation
 */
class CreateInvoice extends BaseInvoice {

    async createRandom(payload = {}) {
        const { supplierId, accountId } = await GetSupplier().selectSupplierIdAndAccountIdByName("ABC OA", "ABC OA");
        const currencyId = await GetCurrency().selectGBP();
        const ownerId = await GetUserDD().selectRandomIdByKeyNameValue();
        const categoryId = await GetAccountPayableCategoryList().selectRandomId();
        let invoicePayload = CreateInvoiceRandomPayloadBuilder().setRandomInvoiceNumber().setCurrentDateAsInvoiceDate().setNextDateAsInvoiceDueDate().setRandomDescription().setSupplierId(supplierId).setOwnerId(ownerId).setCategoryId(categoryId).setSupplierAccountId(accountId).setRandomAmount().setCurrencyId(currencyId).setIsSupplierMatchedByAlgorithm(0).setIsCustomExpenseCreatedDynamically().setIsVendorAccountNameMatched(0).build();
        invoicePayload = Object.assign(invoicePayload, payload);
        const result = await this.create(invoicePayload);
        return result.getData();
    }
}

export default () => new CreateInvoice();