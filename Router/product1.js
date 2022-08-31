const express = require('express')
const productData = require('../database/product1')
const { allproducts, postdata,updateData,deleteProduct } = require('../handlers/product1')


const productRouter = express.Router()
productRouter.get('/products1/data',allproducts)
productRouter.post('/products1',postdata)
productRouter.patch('/products1/:id',updateData)
productRouter.delete('/products1/:id', deleteProduct)








module.exports=productRouter;