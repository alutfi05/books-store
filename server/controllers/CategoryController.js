const {category} = require('../models');

class CategoryController {
    static async getCategories(req, res) {
        try{
            const categories = await category.findAll();
            res.status(200).json(categories);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async create(req, res) {
        try{
            const {name} = req.body;
            const newCategory = await category.findOrCreate({where: {name}});
            res.status(201).json(newCategory, {message: 'Category created'});

        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async detail(req, res) {
        try{
            const {categoryId} = +req.params.id;
            const findCategory = await category.findOne({where: {categoryId}});
            res.status(200).json(findCategory);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async edit(req, res) {
        try{
            const {categoryId} = +req.params.id;
            const {name} = req.body;
            const updateCategory = await category.update({name}, {where: {categoryId}});
            res.status(200).json(updateCategory, {message: 'Category updated'});
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async delete(req, res) {
        try{
            const {categoryId} = +req.params.id;
            const deleteCategory = await category.destroy({where: {categoryId}});
            res.status(200).json(deleteCategory,{message: 'Category deleted'});
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }
}

module.exports = CategoryController;
