var ScoopModel = require('../models/ScoopModel.js');

/**
 * ScoopController.js
 *
 * @description :: Server-side logic for managing Scoops.
 */
module.exports = {

    /**
     * ScoopController.list()
     */
    list: function (req, res) {
        ScoopModel.find(function (err, Scoops) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Scoop.',
                    error: err
                });
            }
            return res.json(Scoops);
        });
    },

    /**
     * ScoopController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ScoopModel.findOne({_id: id}, function (err, Scoop) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Scoop.',
                    error: err
                });
            }
            if (!Scoop) {
                return res.status(404).json({
                    message: 'No such Scoop'
                });
            }
            return res.json(Scoop);
        });
    },

    /**
     * ScoopController.create()
     */
    create: function (req, res) {
        var Scoop = new ScoopModel({			title : req.body.title
        });

        Scoop.save(function (err, Scoop) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Scoop',
                    error: err
                });
            }
            return res.status(201).json(Scoop);
        });
    },

    /**
     * ScoopController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ScoopModel.findOne({_id: id}, function (err, Scoop) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Scoop',
                    error: err
                });
            }
            if (!Scoop) {
                return res.status(404).json({
                    message: 'No such Scoop'
                });
            }

            Scoop.title = req.body.title ? req.body.title : Scoop.title;			
            Scoop.save(function (err, Scoop) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Scoop.',
                        error: err
                    });
                }

                return res.json(Scoop);
            });
        });
    },

    /**
     * ScoopController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ScoopModel.findByIdAndRemove(id, function (err, Scoop) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Scoop.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
