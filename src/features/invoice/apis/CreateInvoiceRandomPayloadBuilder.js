import UtilHelper from "../../../infra/helpers/UtilHelper.js";
import DateHelper from "../../../infra/helpers/DateHelper.js";
import CreateInvoicePayloadBuilder from "./CreateInvoicePayloadBuilder.js";
import GetSupplier from "./GetSupplier.js";

class CreateInvoiceRandomPayloadBuilder extends CreateInvoicePayloadBuilder {

    setRandomInvoiceNumber() {
        return this.setInvoiceNumber(UtilHelper.generateRandomString("invoice"));
    }

    setRandomDescription() {
        return this.setDescription(`invoice_description_${UtilHelper.generateRandomString("invoice")}`);
    }

    setRandomAmount() {
        this.setAmount(UtilHelper.generateRandomNumber());
        return this;
    }

    setCurrentDateAsInvoiceDate() {
        return this.setInvoiceDate(DateHelper.getDate());
    }

    setNextDateAsInvoiceDueDate() {
        return this.setDueDate(DateHelper.addDays(1));
    }
}
export default () => new CreateInvoiceRandomPayloadBuilder();