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
            const {name} = req.body;
            const newPublisher = await publisher.findOrCreate({name});
            res.status(201).json(newPublisher, {message: 'Publisher created'});
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async detail(req, res) {
        try{
            const findPublisher = await publisher.findOne({where: {id: req.params.id}});
            res.status(200).json(findPublisher);
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async edit(req, res) {
        try{
            const {publisherId} = +req.params.id;
            const {name} = req.body;
            const updatePublisher = await publisher.update({name}, {where: {publisherId}});
            res.status(200).json(updatePublisher, {message: 'Publisher updated'});
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async delete(req, res) {
        try{
            const {publisherId} = +req.params.id;
            const deletePublisher = await publisher.destroy({where: {publisherId}});
            res.status(200).json(deletePublisher, {message: 'Publisher deleted'});
        }catch(err){
            res.status(500).json({
                message: err.message
            });
        }
    }
}

module.exports = PublisherController;
