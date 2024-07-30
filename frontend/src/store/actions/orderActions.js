const express = require('express');
const router = express.Router();
const orderActions = require('./orderActions');

// Rute untuk mendapatkan semua pesanan
router.get('/orders', orderActions.getAllOrders);

// Rute untuk mendapatkan pesanan berdasarkan ID
router.get('/orders/:id', orderActions.getOrderById);

// Rute untuk membuat pesanan baru
router.post('/orders', orderActions.createOrder);

// Rute untuk memperbarui pesanan berdasarkan ID
router.put('/orders/:id', orderActions.updateOrder);

// Rute untuk menghapus pesanan berdasarkan ID
router.delete('/orders/:id', orderActions.deleteOrder);

module.exports = router;

