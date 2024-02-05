
import BaseUser from "./BaseUser.js";

class GetCurrency extends BaseUser {

    constructor() {
        super("masters/currencies");
    }

    async selectGBP() {
        const result = await this.get();
        return result.getCollection().selectIdByLabel("GBP", "currency");
    }
}

export default () => new GetCurrency();