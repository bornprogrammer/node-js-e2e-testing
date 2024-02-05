import BaseE2E from "../../../infra/BaseE2E.js";
import MethodChainingHandler from "../../../infra/MethodChainingHandler.js";
import GetWorkflowList from "../../smart-approval/apis/GetWorkflowList.js";
import CreateMapping from "../apis/CreateMapping.js";
import GetFieldDetails from "../apis/GetFieldDetails.js";
import GetFieldList from "../apis/GetFieldList.js";

class AssignWorkflowForOwner extends BaseE2E {

    async assert(req, res) {
        const getFieldAndSelectOwner = { className: GetFieldList, methodName: "getFieldAndSelectOwner", methodParams: {} };
        const getOwnerFieldDetails = { className: GetFieldDetails, methodName: "getOwnerFieldDetails", methodParams: { numberOfItems: 3 } };
        const getWorkflowList = { instance: GetWorkflowList(), methodName: "workflowList", methodParams: { numberOfItems: 3 } };
        const createMapping = { className: CreateMapping, methodName: "create" }
        const result = await MethodChainingHandler(getFieldAndSelectOwner, getOwnerFieldDetails, getWorkflowList, createMapping).execute();
        return result;
    }
}

export default new AssignWorkflowForOwner();