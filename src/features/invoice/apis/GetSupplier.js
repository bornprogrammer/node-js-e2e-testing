import BaseInvoice from "./BaseInvoice.js";

class GetSupplier extends BaseInvoice {

    constructor() {
        super("suppliers");
    }

    async selectSupplierIdAndAccountIdByName(name, accountName) {
        const result = await this.get();
        const supplierId = result.getCollection().selectIdByLabel(name);
        const accountId = result.getCollection().getChildCollection(name, "supplier_accounts").selectIdByLabel(accountName, "account_name");
        return { supplierId, accountId };
    }

    async selectSupplierAndAccountRandomly() {
        const result = await this.get();
        const supplierId = result.getCollection().selectRandomId();
        const accountId = result.getCollection().getChildCollectionRandomly("supplier_accounts").selectRandomId();
        return { supplierId, accountId };
    }
}

export default () => new GetSupplier();