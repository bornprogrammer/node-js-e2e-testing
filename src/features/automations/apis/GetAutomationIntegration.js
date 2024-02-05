import BaseAutomation from "./BaseAutomation.js";

class GetAutomationIntegration extends BaseAutomation {

    async selectInvoiceIntegration() {
        return await this.selectIntegrationByType("invoice");
    }

    async selectPOIntegration() {
        return await this.selectIntegrationByType("po");
    }

    async selectIntegrationByType(params) {
        const integrationType = params.firstParam.integrationType;
        const item = await this.selectObject("type", "invoice");
        const automationToggleData = item.automation_toggles ?? {};
        const result = { workflow_integration_type_id: item.id, ...automationToggleData };
        return result;
    }
}

export default () => new GetAutomationIntegration();