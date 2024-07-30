const store = require('./store');

// Mendapatkan semua pengguna
exports.getAllUsers = (req, res) => {
  store.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(users);
  });
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  store.getUserById(userId, (err, user) => {
    if (err) {
      return res.status(err.message === 'User not found' ? 404 : 500).send(err.message);
    }
    res.json(user);
  });
};

// Menambahkan pengguna baru
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  store.createUser(name, email, (err, userId) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(`User created with ID ${userId}`);
  });
};

// Memperbarui pengguna berdasarkan ID
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  store.updateUser(userId, name, email, (err, affectedRows) => {
    if (err) {
      return res.status(err.message === 'User not found' ? 404 : 500).send(err.message);
    }
    res.send(`User updated, ${affectedRows} row(s) affected`);
  });
};

// Menghapus pengguna berdasarkan ID
exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  store.deleteUser(userId, (err, affectedRows) => {
    if (err) {
      return res.status(err.message === 'User not found' ? 404 : 500).send(err.message);
    }
    res.send(`User deleted, ${affectedRows} row(s) affected`);
  });
};

