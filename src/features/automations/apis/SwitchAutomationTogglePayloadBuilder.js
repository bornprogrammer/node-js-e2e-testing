import BasePayloadBuilder from "../../../infra/BasePayloadBuilder.js";

class SwitchAutomationTogglePayloadBuilder extends BasePayloadBuilder {

    constructor() {
        super();
    }

    setToggleOn() {
        this.payload.is_automation_on = true;
        return this;
    }


    setToggleOff() {
        this.payload.is_automation_on = false;
        return this;
    }

    setIntegrationId(integrationId) {
        this.payload.integration_id = integrationId;
        return this;
    }

    setToggleId(id) {
        this.payload.id = id;
        return this;
    }


    setIsAssignedWorkflowToBeKept(isAssignedWorkflowToBeKept) {
        this.payload.is_assigned_workflow_to_be_kept = isAssignedWorkflowToBeKept;
        return this;
    }
}

export default () => new SwitchAutomationTogglePayloadBuilder;