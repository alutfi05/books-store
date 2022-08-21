const route = require("express").Router();
const authorRoutes = require("./author");
const bookRoutes = require("./book");
const categoryRoutes = require("./category");
const publisherRoutes = require("./publisher");

route.get("/api", (req, res) => {
    res.json({ message: "Books Store Home Page" });
});

route.use("/api/authors", authorRoutes);
route.use("/api/books", bookRoutes);
route.use("/api/categories", categoryRoutes);
route.use("/api/publishers", publisherRoutes);

module.exports = route;
