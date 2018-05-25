var db = require("../models");

exports.getItems = function(req, res){
    db.TempModel.find()
        .then(function(temp){
            res.status(201).json(temp);
        })
        .catch(function(err){
            res.send(err);
        });
    }

exports.createItem = function(req, res){
    db.TempModel.create(req.body)
        .then(function(newItem){
            res.json(newItem);
        })
        .catch(function(err){
            res.send(err);
        });
    }

exports.getItem = function(req, res){
    db.TempModel.findById(req.params.id)
        .then(function(foundItem){
            res.json(foundItem);
        })
        .catch(function(err){
            res.send(err);
        });
}

exports.updateItem = function(req, res){
    db.TempModel.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
    .then(function(updatedItem){
        res.json(updatedItem);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.deleteItem = function(req, res){
    db.TempModel.remove({_id:req.params.id})
    .then(function(){
        res.json({message:"all gone"});
    })
    .catch(function(err){
        res.send(err);
    });
}

module.exports = exports;