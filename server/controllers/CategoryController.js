const { category, book } = require("../models");

class CategoryController {
    static async getCategories(req, res) {
        try {
            let categories = await category.findAll({
                order: [["id", "desc"]],
                include: [book],
            });

            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const { name } = req.body;

            let newCategory = await category.create({ name });

            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async detail(req, res) {
        try {
            const id = +req.params.categoryId;

            let findCategory = await category.findByPk(id, { include: [book] });

            findCategory !== null
                ? res.status(200).json(findCategory)
                : res
                      .status(404)
                      .json({ message: `Category id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.categoryId;
            const { name } = req.body;

            let updateCategory = await category.update(
                { name },
                { where: { id } }
            );

            updateCategory[0] === 1
                ? res
                      .status(200)
                      .json({ message: `Category id ${id} has been updated!` })
                : res
                      .status(404)
                      .json({ message: `Category id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.categoryId;

            let deleteCategory = await category.destroy({ where: { id } });

            deleteCategory === 1
                ? res
                      .status(200)
                      .json({ message: `Category id ${id} has been deleted!` })
                : res
                      .status(404)
                      .json({ message: `Category id ${id} not found!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = CategoryController;
