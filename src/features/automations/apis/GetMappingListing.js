
import BaseAutomation from "./BaseAutomation.js";

class GetMappingListing extends BaseAutomation {

    constructor() {
        super("mappers");
    }

    async mappingList(params) {
        const { integrationType } = params.firstParam;
        const result = await this.setPaths(integrationType).get();
        return result;
    }
}

export default () => new GetMappingListing();