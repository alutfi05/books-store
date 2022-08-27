const { publisher, book } = require("../models");

class PublisherController {
    static async getPublishers(req, res) {
        try {
            let publishers = await publisher.findAll({
                order: [["id", "desc"]],
                include: [book],
            });

            res.status(200).json(publishers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const { name } = req.body;

            let newPublisher = await publisher.create({ name });

            res.status(201).json(newPublisher);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async detail(req, res) {
        try {
            const id = +req.params.publisherId;

            let findPublisher = await publisher.findByPk(id, {
                include: [book],
            });

            findPublisher !== null
                ? res.status(200).json(findPublisher)
                : res
                      .status(404)
                      .json({ message: `Publisher id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.publisherId;
            const { name } = req.body;

            let updatePublisher = await publisher.update(
                { name },
                { where: { id } }
            );

            updatePublisher[0] === 1
                ? res
                      .status(200)
                      .json({ message: `Publisher id ${id} has been updated!` })
                : res
                      .status(404)
                      .json({ message: `Publisher id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.publisherId;

            let deletePublisher = await publisher.destroy({ where: { id } });

            deletePublisher === 1
                ? res
                      .status(200)
                      .json({ message: `Publisher id ${id} has been deleted!` })
                : res
                      .status(404)
                      .json({ message: `Publisher id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PublisherController;
