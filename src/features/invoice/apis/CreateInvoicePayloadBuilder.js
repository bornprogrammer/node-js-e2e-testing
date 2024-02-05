class CreateInvoicePayloadBuilder {
    payload;

    constructor() {
        this.payload = {};
    }

    setInvoiceNumber(invoiceNumber) {
        this.payload.invoice_number = invoiceNumber;
        return this;
    }

    setDescription(desc) {
        this.payload.description = desc;
        return this;
    }

    setInvoiceDate(date) {
        this.payload.invoice_date = date;
        return this;
    }

    setDueDate(date) {
        this.payload.due_date = date;
        return this;
    }

    setSupplierId(id) {
        this.payload.supplier_id = id;
        return this;
    }

    setOwnerId(id) {
        this.payload.owner = id;
        return this;
    }

    setCategoryId(id) {
        this.payload.kloo_category_id = id;
        return this;
    }

    setIsSupplierMatchedByAlgorithm(isMatched) {
        this.payload.is_supplier_matched_by_algorithm = isMatched;
        return this;
    }

    setIsVendorAccountNameMatched(isMatched) {
        this.payload.is_vendor_account_name_matched = isMatched;
        return this;
    }

    setIsCustomExpenseCreatedDynamically() {
        this.payload.is_custom_expense_created_dynamically = 0;
        return this;
    }

    setSupplierAccountId(accountId) {
        this.payload.supplier_account_details_id = accountId;
        return this;
    }

    setAmount(amount) {
        this.payload.amount = amount;
        return this;
    }

    setCurrencyId(id) {
        this.payload.currency = id;
        return this;
    }

    build() {
        const payload = Object.assign({}, this.payload);
        this.payload = {};
        return payload;
    }

}
export default CreateInvoicePayloadBuilder;
export const CreateInvoicePayloadBuilderMake = () => new CreateInvoicePayloadBuilder();