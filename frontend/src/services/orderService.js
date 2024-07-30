const express = require('express');
const router = express.Router();
const orderService = require('./orderService');

// Rute untuk mendapatkan semua pesanan
router.get('/orders', orderService.getAllOrders);

// Rute untuk mendapatkan pesanan berdasarkan ID
router.get('/orders/:id', orderService.getOrderById);

// Rute untuk membuat pesanan baru
router.post('/orders', orderService.createOrder);

// Rute untuk memperbarui pesanan berdasarkan ID
router.put('/orders/:id', orderService.updateOrder);

// Rute untuk menghapus pesanan berdasarkan ID
router.delete('/orders/:id', orderService.deleteOrder);

module.exports = router;

