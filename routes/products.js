const express = require('express')
const router = express.Router()
const {getProduct} = require('../controllers/product.controller')

router.get('/', getProduct);

module.exports = router;
