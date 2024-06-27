const express = require('express');
const router = express.Router();
const { addOrder, getOrders } = require('../controllers/orders');

// Add new order
router.post('/add', addOrder);
router.get('/all', getOrders);

module.exports = router;
