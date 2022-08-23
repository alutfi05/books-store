const publisherRoute = require("express").Router();
const { PublisherController } = require("../controllers");

publisherRoute.get("/", PublisherController.getPublishers);
publisherRoute.post("/create", PublisherController.create);
publisherRoute.get("/detail/:publisherId", PublisherController.detail);
publisherRoute.put("/edit/:publisherId", PublisherController.edit);
publisherRoute.delete("/delete/:publisherId", PublisherController.delete);

module.exports = publisherRoute;
