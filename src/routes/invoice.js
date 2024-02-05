import createInvoiceTest from "../features/invoice/e2e/CreateInvoiceTest.js";
import UtilHelper from "../infra/helpers/UtilHelper.js";

const invoiceRoutes = (express) => {

    const router = express.Router();

    router.get("/create-invoice", UtilHelper.assignRouteHandler(createInvoiceTest, "createSimpleInvoice"));

    return router;
}

export default invoiceRoutes;
