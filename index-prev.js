import express from "express";

import config from "config";
import workflowAutomationControllerIns from "./src/controllers/WorkflowAutomationController.js";
import graphql, { GraphQlObj } from "graphql";
import graphqlHTTP from "express-graphql";

const app = express();

app.listen(config.get("port"), async () => {
  console.log(`app started at port number ${config.get("port")} and running in environment ${config.get("node_env")}`);
});

app.get("/", workflowAutomationControllerIns.test);

// const schema = 

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

export default app;

 // const myResult = Promise.all([GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get(), GetFieldList().get()]).then((resul) => {
        //     console.log(resul);
        // });