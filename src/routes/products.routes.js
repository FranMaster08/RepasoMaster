const express = require('express')
const router = express.Router()
const controller = require('../controller/productsController')
router.get('/',controller.getProducts)
router.get('/:id',controller.getProduct)



module.exports = router