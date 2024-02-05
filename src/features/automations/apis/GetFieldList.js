import CollectionService from "../../../infra/CollectionService.js";
import BaseAutomation from "./BaseAutomation.js";

class GetFieldList extends BaseAutomation {

    constructor() {
        super("fields");
    }

    async getFieldList(params) {
        const { integrationType, fieldTypeKey, fieldValue } = params;
        const result = await this.setPaths(integrationType).selectObject(fieldTypeKey, fieldValue);
        return result;
    }

    async getDefaultFieldListAndSelectOwner(params) {
        const integrationType = params.firstParam.integrationType;
        const result = await this.getFieldList({ integrationType, fieldTypeKey: "type", fieldValue: "default" });
        return CollectionService(result.options).byValue("field_name", "owner");
    }

    async getDefaultFieldListAndSelectPayee(params) {
        const integrationType = params.firstParam.integrationType;
        const result = await this.getFieldList({ integrationType, fieldTypeKey: "type", fieldValue: "default" });
        return CollectionService(result.options).byValue("field_name", "payee");
    }

    async getCustomFieldList(params) {
        const integrationType = params.firstParam.integrationType;
        const result = await this.getFieldList({ integrationType, fieldTypeKey: "type", fieldValue: "default" });
        return result;
    }

    async getCategoryFieldList(params) {
        const integrationType = params.firstParam.integrationType;
        const result = await this.getFieldList({ integrationType, fieldTypeKey: "type", fieldValue: "default" });
        return result;
    }
}

export default () => new GetFieldList();