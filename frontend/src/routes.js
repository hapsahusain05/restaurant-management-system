const express = require('express');
const router = express.Router();
const userController = require('./userController');

// Rute untuk mendapatkan semua pengguna
router.get('/users', userController.getAllUsers);

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/users/:id', userController.getUserById);

// Rute untuk membuat pengguna baru
router.post('/users', userController.createUser);

// Rute untuk memperbarui pengguna berdasarkan ID
router.put('/users/:id', userController.updateUser);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

