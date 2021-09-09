const Products = require('../models/Products')

exports.createProduct = (req,res)=>{
    Products.create({...req.body})
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(500).json({err}))
}

exports.getAllProducts = (req, res) =>{
    Products.find()
    .then(product => res.status(200).json({product}))
    .catch(err=> res.status(500).json({err}))
}

//Llamar producto por id oneProduct
exports.findProduct = (req, res) =>{
    const {id} = req.params
    Products.finById(id)
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(500).json({err}))
}

exports.updateProduct = (req, res) => {
    const {id} = req.params
    Products.findByIdAndUpdate(id, {...req.body}, {new:true})
    .then(product => res.tatus(200).json({product}))
    .catch(err => res.status(500).json({err}))
}

exports.deleteProduct = (req, res) =>{
    const {id} = req.params
    Products.findByIdAndDelete(id)
    .then(product => res.tatus(200).json({product}))
    .catch(err => res.status(500).json({err}))
}