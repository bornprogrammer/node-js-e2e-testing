import assignWorkflowForOwner from "../features/automations/e2e/AssignWorkflowForOwner.js";
import createWorkflowMappingTest from "../features/automations/e2e/CreateWorkflowMappingTest.js";
import switchAutomationToggleTest from "../features/automations/e2e/SwitchAutomationToggleTest.js";
import UtilHelper from "../infra/helpers/UtilHelper.js";

const automationRoutes = (express) => {

    const router = express.Router();

    router.get("/assign", UtilHelper.assignRouteHandler(assignWorkflowForOwner, "assert"));

    router.get("/create-mapping", UtilHelper.assignRouteHandler(createWorkflowMappingTest, "ownerFieldMappingForInvoice"));

    router.get("/toggle-on", UtilHelper.assignRouteHandler(switchAutomationToggleTest, "toggleOn"));

    router.get("/toggle-off", UtilHelper.assignRouteHandler(switchAutomationToggleTest, "toggleOff"));

    return router;
}

export default automationRoutes;
