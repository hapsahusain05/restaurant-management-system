const express = require('express');
const router = express.Router();
const orderController = require('./Order');

// Rute untuk mendapatkan semua pesanan
router.get('/orders', orderController.getAllOrders);

// Rute untuk mendapatkan pesanan berdasarkan ID
router.get('/orders/:id', orderController.getOrderById);

// Rute untuk membuat pesanan baru
router.post('/orders', orderController.createOrder);

// Rute untuk memperbarui pesanan berdasarkan ID
router.put('/orders/:id', orderController.updateOrder);

// Rute untuk menghapus pesanan berdasarkan ID
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;

