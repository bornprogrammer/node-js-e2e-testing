import BaseE2E from "../../../infra/BaseE2E.js";
import MethodChainingHandler from "../../../infra/MethodChainingHandler.js";
import SwitchAutomationToggle from "../apis/SwitchAutomationToggle.js";

class SwitchAutomationToggleTest extends BaseE2E {

    async toggleOn() {
        const toggleOn = { className: SwitchAutomationToggle, methodName: "toggleOn", methodParams: { integrationByType: "invoice" } };
        const result = await MethodChainingHandler(toggleOn).execute();
        return result;
    }

    async toggleOff() {
        const toggleOff = { className: SwitchAutomationToggle, methodName: "toggleOff", methodParams: { integrationByType: "invoice" } };
        const result = await MethodChainingHandler(toggleOff).execute();
        return result;
    }

}

export default new SwitchAutomationToggleTest();