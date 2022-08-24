const bookRoute = require("express").Router();
const { BookController } = require("../controllers");
const { upload } = require("../config/multer");

bookRoute.get("/", BookController.getBooks);
bookRoute.post("/create", upload.single("image"), BookController.create);
bookRoute.get("/detail/:bookId", BookController.detail);
bookRoute.put("/edit/:bookId", BookController.edit);
bookRoute.delete("/delete/:bookId", BookController.delete);

module.exports = bookRoute;
