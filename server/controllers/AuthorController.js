const { author, book } = require("../models");

class AuthorController {
    static async getAuthors(req, res) {
        try {
            let authors = await author.findAll({
                order: [["id", "desc"]],
                include: [book],
            });

            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const { name, dateOfBirth, city } = req.body;

            let newAuthor = await author.create({
                name,
                dateOfBirth,
                city,
            });

            res.status(201).json(newAuthor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async detail(req, res) {
        try {
            const id = +req.params.authorId;

            let findAuthor = await author.findByPk(id, {
                include: [book],
            });

            findAuthor !== null
                ? res.status(200).json(findAuthor)
                : res
                      .status(404)
                      .json({ message: `Author id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.authorId;
            const { name, dateOfBirth, city } = req.body;

            let updateAuthor = await author.update(
                { name, dateOfBirth, city },
                { where: { id } }
            );

            updateAuthor[0] === 1
                ? res
                      .status(200)
                      .json({ message: `Author id ${id} has been updated!` })
                : res
                      .status(404)
                      .json({ message: `Author id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.authorId;

            let deleteAuthor = await author.destroy({ where: { id } });

            deleteAuthor === 1
                ? res
                      .status(200)
                      .json({ message: `Author id ${id} has been deleted!` })
                : res
                      .status(404)
                      .json({ message: `Author id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = AuthorController;
