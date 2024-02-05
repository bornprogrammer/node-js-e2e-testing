
import CollectionService from "../../../infra/CollectionService.js";
import BaseAutomation from "./BaseAutomation.js";

class DeleteMappings extends BaseAutomation {

    constructor() {
        super("mappers");
    }

    async deleteAll(params) {
        const { integrationType } = params.firstParam;
        const { isAssignedWorkflowToBeKept } = params.methodParams ?? false;
        const mappingList = params.results.mappingList;
        let result = null;
        if (mappingList) {
            const mappingIds = CollectionService(mappingList.getData()["mapped_fields"]).extractOutByKeyName();
            const payload = { is_assigned_workflow_to_be_kept: false, ids: mappingIds };
            result = await this.setPaths(integrationType).delete(payload);
        }
        return result;
    }
}

export default () => new DeleteMappings();