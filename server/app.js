require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express"),
    swaggerDocument = require("./swagger.json");

app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Books Store App listening on port ${port}`);
});
