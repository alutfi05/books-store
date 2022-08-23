const authorRoute = require("express").Router();
const { AuthorController } = require("../controllers");

authorRoute.get("/", AuthorController.getAuthors);
authorRoute.post("/create", AuthorController.create);
authorRoute.get("/detail/:authorId", AuthorController.detail);
authorRoute.put("/edit/:authorId", AuthorController.edit);
authorRoute.delete("/delete/:authorId", AuthorController.delete);

module.exports = authorRoute;
