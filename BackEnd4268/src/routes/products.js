const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

// POST request to add a new product
router.post('/', productController.addProduct);
router.get('/', productController.getAllProducts);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;