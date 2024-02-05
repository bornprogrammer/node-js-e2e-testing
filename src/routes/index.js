import automationRoutes from "./automation.js";
import invoiceRoutes from "./invoice.js";

const routes = (express) => {
    const router = express.Router();
    // mention the feature name routes here
    router.use("/automations", automationRoutes(express));
    router.use("/invoice", invoiceRoutes(express));
    return router;
}

export default routes;
