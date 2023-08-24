const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getIdProduct);
router.post('/products',productsController.postProduct);
router.put('/:id', productsController.updateProduct); 
router.delete('/:id', productsController.deleteProduct);
router.patch('/increment/:id', productsController.incrementQuantity);
router.patch('/decrement/:id', productsController.decrementQuantity);
module.exports = router;   