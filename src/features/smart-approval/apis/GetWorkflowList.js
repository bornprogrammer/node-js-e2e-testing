import BestSmartApprovalV3 from "./BestSmartApprovalV3.js";

class GetWorkflowList extends BestSmartApprovalV3 {

    constructor() {
        super("get-all-workflows");
    }
    /**
     * 
     * @returns 
     */
    async workflowList(type) {
        const result = await this.setQueryStr({ type }).get();
        return result;
    }

    /**
     * 
     * @returns 
     */
    async invoiceWorkflowList() {
        const result = await this.workflowList("account-payable-approval");
        return result;
    }

    /**
     * 
     * @returns 
     */
    async poWorkflowList() {
        const result = await this.workflowList("purchase-order");
        return result;
    }

}

export default () => new GetWorkflowList();