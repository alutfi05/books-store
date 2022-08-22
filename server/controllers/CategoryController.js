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
            // const {name} = req.body;
            // if(name !== category.findOrCreate({where: {name}})){
            //     const newCategory = await category.create({name});
            //     res.status(201).json(newCategory);
            // }else{
            //     res.status(409).json({
            //         message: 'Category already exist'
            //     });
            // }
            const newCategory = await category.findOrCreate({where: req.body});
            res.status(201).json(newCategory);

        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async detail(req, res) {
        try{
            const categories = await category.findOne({where: {id: req.params.id}});
            res.status(200).json(categories);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async edit(req, res) {
        try{
            const updateCategories = await category.update(req.body, {where: {id: req.params.id}});
            res.status(200).json(updateCategories);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async delete(req, res) {
        try{
            const deleteCategories = await category.destroy({where: {id: req.params.id}});
            res.status(200).json(deleteCategories);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }
}

module.exports = CategoryController;
