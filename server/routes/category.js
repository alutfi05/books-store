const categoryRoute = require("express").Router();
const { CategoryController } = require("../controllers");

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.post("/create", CategoryController.create);
categoryRoute.get("/detail/:categoryId", CategoryController.detail);
categoryRoute.put("/edit/:categoryId", CategoryController.edit);
categoryRoute.delete("/delete/:categoryId", CategoryController.delete);

module.exports = categoryRoute;
