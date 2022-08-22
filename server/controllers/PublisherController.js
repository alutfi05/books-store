const {publisher} = require('../models');

class PublisherController {
    static async getPublishers(req, res) {
        try{
            const publishers = await publisher.findAll();
            res.status(200).json(publishers);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async create(req, res) {
        try{
            const newPublisher = await publisher.findOrCreate(req.body);
            res.status(201).json(newPublisher);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async detail(req, res) {
        try{
            const publisher = await publisher.findOne({where: {id: req.params.id}});
            res.status(200).json(publisher);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async edit(req, res) {
        try{
            const updatePublisher = await publisher.update(req.body, {where: {id: req.params.id}});
            res.status(200).json(updatePublisher);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async delete(req, res) {
        try{
            const deletePublisher = await publisher.destroy({where: {id: req.params.id}});
            res.status(200).json(deletePublisher);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }
}

module.exports = PublisherController;
