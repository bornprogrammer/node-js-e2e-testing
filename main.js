import express from "express";
import config from "config";
import loginService from "./src/services/LoginService.js";
import userSession from "./src/services/UserSession.js";
import appMiddleware from "./src/middlewares/appMiddleware.js";
import routes from "./src/routes/index.js";
const app = express();

appMiddleware({ app, router: routes(express) });

app.listen(config.get("port"), async () => {
  const loginResult = await loginService.login();
  userSession.setLoggedInUserData(loginResult.getData());
  console.log("logged in successfully for org " + userSession.getLoggedInOrgName());
});