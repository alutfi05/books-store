const { book, category, author, publisher } = require("../models");

class BookController {
    static async getBooks(req, res) {
        try {
            let books = await book.findAll({
                order: [["id", "desc"]],
                include: [category, author, publisher],
            });

            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const {
                title,
                image,
                synopsis,
                price,
                publicationYear,
                categoryId,
                authorId,
                publisherId,
            } = req.body;

            // let image = null;

            // if (req.file && req.file["filename"] !== undefined) {
            //     image = req.file["filename"];
            // }

            let newBook = await book.create({
                title,
                image,
                synopsis,
                price,
                publicationYear,
                categoryId,
                authorId,
                publisherId,
            });

            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async detail(req, res) {
        try {
            const id = +req.params.bookId;

            let findBook = await book.findByPk(id, {
                include: [category, author, publisher],
            });

            findBook !== null
                ? res.status(200).json(findBook)
                : res.status(404).json({ message: `Book id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.bookId;
            const {
                title,
                image,
                synopsis,
                price,
                publicationYear,
                categoryId,
                authorId,
                publisherId,
            } = req.body;

            let updateBook = await book.update(
                {
                    title,
                    image,
                    synopsis,
                    price,
                    publicationYear,
                    categoryId,
                    authorId,
                    publisherId,
                },
                { where: { id } }
            );

            updateBook[0] === 1
                ? res
                      .status(200)
                      .json({ message: `Book id ${id} has been updated!` })
                : res.status(404).json({ message: `Book id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.bookId;

            let deleteBook = await book.destroy({ where: { id } });

            deleteBook === 1
                ? res
                      .status(200)
                      .json({ message: `Book id ${id} has been deleted!` })
                : res.status(404).json({ message: `Book id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BookController;
