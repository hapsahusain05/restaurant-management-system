const db = require('./db');

// Mendapatkan semua item menu
exports.getAllMenus = (req, res) => {
  const query = 'SELECT * FROM menu';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// Mendapatkan item menu berdasarkan ID
exports.getMenuById = (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM menu WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Menu item not found');
    }
    res.json(results[0]);
  });
};

// Menambahkan item menu baru
exports.addMenu = (req, res) => {
  const { name, description, price } = req.body;
  const query = 'INSERT INTO menu (name, description, price) VALUES (?, ?, ?)';
  db.query(query, [name, description, price], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Menu item added successfully');
  });
};

// Mengupdate item menu
exports.updateMenu = (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  const query = 'UPDATE menu SET name = ?, description = ?, price = ? WHERE id = ?';
  db.query(query, [name, description, price, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Menu item not found');
    }
    res.send('Menu item updated successfully');
  });
};

// Menghapus item menu
exports.deleteMenu = (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM menu WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Menu item not found');
    }
    res.send('Menu item deleted successfully');
  });
};

