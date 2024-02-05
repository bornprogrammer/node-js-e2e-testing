import BaseAccountingIntegration from "./BaseAccountingIntegration.js";

class GetAccountPayableCategoryList extends BaseAccountingIntegration {

    constructor() {
        super("kloo/datasets/categories/list?page_name=accountpayable");
    }

    async selectRandomId() {
        const result = await this.selectRandomIdByKeyNameValue();
        return result;
    }

}

export default () => new GetAccountPayableCategoryList();