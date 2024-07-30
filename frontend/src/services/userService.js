const userService = require('./userService');

// Mendapatkan semua pengguna
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Menambahkan pengguna baru
exports.createUser = async (req, res) => {
  try {
    const userId = await userService.createUser(req.body);
    res.status(201).send(`User created with ID ${userId}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Memperbarui pengguna berdasarkan ID
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userService.updateUser(userId, req.body);
    if (!result) {
      return res.status(404).send('User not found');
    }
    res.send('User updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Menghapus pengguna berdasarkan ID
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userService.deleteUser(userId);
    if (!result) {
      return res.status(404).send('User not found');
    }
    res.send('User deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

