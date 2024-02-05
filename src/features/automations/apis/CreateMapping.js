import UtilHelper from "../../../infra/helpers/UtilHelper.js";
import BaseAutomation from "./BaseAutomation.js";

class CreateMapping extends BaseAutomation {

    constructor() {
        super("mappers");
    }

    async createForInvoice(params) {
        const integrationType = params.firstParam.integrationType;
        const mappingList = params.results.mappingList;
        if (!UtilHelper.isValidArray(mappingList.getData)) {
            const payload = this.buildPayload(params);
            const result = await this.setPaths(integrationType).create(payload);
            return result;
        }
        return null;
    }

    buildPayload(params) {
        const { fieldList, workflows } = params.results;
        const numberOfMappingItems = params.methodParams.numberOfMappingItems ?? 3;
        const fieldValues = fieldList.getCollection().byRandomNumberOfItems(numberOfMappingItems);
        const workflowValues = workflows.getCollection().byRandomNumberOfItems(numberOfMappingItems + 1);
        const field = params.results.field;
        const payload = { field_id: field.value, field_type_id: field.workflow_automation_field_type_id, mappings: [] };
        for (var index = 0; index < fieldValues.length; index++) {
            payload.mappings.push({ workflow_id: workflowValues[index]["id"], field_value_id: fieldValues[index]["value"], order: index + 1 });
        }
        payload.mappings.push({ workflow_id: workflowValues[index]["id"], field_value_id: "remaining_values", order: index + 1 });
        return payload;
    }
}

export default () => new CreateMapping();