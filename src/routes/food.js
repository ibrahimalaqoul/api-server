'use strict';
const express = require ('express');
const {foodCollection} = require('../models/index')

const routers = express.Router();


routers.get('/food',getFood);
routers.post('/food',addfood)
routers.get('/food/:id',getFoodById)
routers.delete('/food/:id',deleteFood)
routers.put('/food/:id',updatedfood)

async function getFood(req,res){
    let allfood = await foodCollection.readRecord();
    res.status(200).json(allfood);
}

async function addfood(req,res) {
  let newfood = req.body;
  let addedfood = await foodCollection.createRecord(newfood);
  res.status(201).json(addedfood);
}
async function getFoodById(req,res){
    let addedId = parseInt(req.params.id);
    let foodAskedFor = await foodCollection.readRecord(id);
    res.status(200).json(foodAskedFor);
}

async function deleteFood(req,res){
    let deletedId = parseInt(req.params.id);
    let deletedfood = await foodCollection.removeRecord(id);
    res.status(204).json(deletedfood);
}

async function updatedfood(req,res){
 let body =req.body;
 let id = req.params.id;  
    const Updatedfood = await foodCollection.updateRecord(body,id);
    res.status(201).json(Updatedfood);
}




module.exports = routers ;