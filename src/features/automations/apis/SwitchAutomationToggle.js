import BaseAutomation from "./BaseAutomation.js";
import GetAutomationIntegration from "./GetAutomationIntegration.js";
import SwitchAutomationTogglePayloadBuilder from "./SwitchAutomationTogglePayloadBuilder.js";

class SwitchAutomationToggle extends BaseAutomation {

    async toggleOff(params) {
        const integrationData = params.lastInvokedMethodResult;
        const payload = SwitchAutomationTogglePayloadBuilder().setToggleOff().setIsAssignedWorkflowToBeKept(false).setIntegrationId(integrationData.workflow_integration_type_id).build();
        const result = await this.create(payload);
        return result;
    }

    async toggleOn(params) {
        const integrationData = params.lastInvokedMethodResult;
        const payload = SwitchAutomationTogglePayloadBuilder().setToggleOn().setIsAssignedWorkflowToBeKept(false).setIntegrationId(integrationData.workflow_integration_type_id).setToggleId(integrationData.id).build();
        const result = await this.create(payload);
        return result;
    }
}

export default () => new SwitchAutomationToggle();