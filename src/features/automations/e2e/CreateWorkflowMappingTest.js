import BaseE2E from "../../../infra/BaseE2E.js";
import MethodChainingHandler from "../../../infra/MethodChainingHandler.js";
import GetWorkflowList from "../../smart-approval/apis/GetWorkflowList.js";
import CreateMapping from "../apis/CreateMapping.js";
import DeleteMappings from "../apis/DeleteMappings.js";
import GetAutomationIntegration from "../apis/GetAutomationIntegration.js";
import GetFieldDetails from "../apis/GetFieldDetails.js";
import GetFieldList from "../apis/GetFieldList.js";
import GetMappingListing from "../apis/GetMappingListing.js";
import SwitchAutomationToggle from "../apis/SwitchAutomationToggle.js";

class CreateWorkflowMappingTest extends BaseE2E {

    /**
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async ownerFieldMappingForInvoice() {
        const integrationType = "invoice";
        const result = await this.createMapping({ integrationType, fieldTypeMethodName: "getDefaultFieldListAndSelectOwner", isExistingMappingToBeDeleted: false });
        return result;
    }

    async payeeFieldMappingForInvoice() {
        const integrationType = "invoice";
        const result = await this.createMapping({ integrationType, fieldTypeMethodName: "getDefaultFieldListAndSelectPayee", isExistingMappingToBeDeleted: false });
        return result;
    }

    async createMapping({ integrationType, fieldTypeMethodName, isExistingMappingToBeDeleted }) {
        const integrationData = {
            className: GetAutomationIntegration, methodName: "selectIntegrationByType", methodParams: { integrationType }
        };
        const toggleOn = {
            className: SwitchAutomationToggle, methodName: "toggleOn", methodParams: {}
        };
        const fieldTypeDetail = { className: GetFieldList, methodName: fieldTypeMethodName, methodParams: {}, resultAs: "field" };
        const fieldList = { className: GetFieldDetails, methodName: "selectFieldList", methodParams: {}, resultAs: "fieldList" };
        const invoiceWorkflowList = { instance: GetWorkflowList(), methodName: "invoiceWorkflowList", methodParams: {}, resultAs: "workflows" };
        const mappingList = { instance: GetMappingListing(), methodName: "mappingList", toBeContinuedIfAnyError: true };
        let deleteMapping = null;
        if (isExistingMappingToBeDeleted) {
            deleteMapping = { className: DeleteMappings, methodName: "deleteAll", toBeContinuedIfAnyError: true };
        }
        const createMapping = { className: CreateMapping, methodName: "createForInvoice" };
        const result = await MethodChainingHandler(integrationData, toggleOn, fieldTypeDetail, fieldList, invoiceWorkflowList, mappingList, createMapping).execute();
        return result;
    }
}

export default new CreateWorkflowMappingTest();