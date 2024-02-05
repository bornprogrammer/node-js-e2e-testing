import BaseAutomation from "./BaseAutomation.js";

class GetFieldDetails extends BaseAutomation {
    /**
     * 
     * @param {*} params {first_param:{},method_param:"",results:"",last_invoked_method_result:""}
     * @returns 
     */
    async selectFieldList(params) {
        const selectedField = params.lastInvokedMethodResult;
        const fieldName = selectedField.field_name;
        const result = await this.httpService.setKlooAPIBaseUrl().setPath(selectedField.api_path).setResponseTransformerCallback(this.responseTransformer.bind(this, fieldName)).get();
        return result;
    }

    responseTransformer(fieldName, response) {
        if (fieldName === "owner") {
            return response.result.data;
        } else {
            return response.result;
        }
    }
}

export default () => new GetFieldDetails();