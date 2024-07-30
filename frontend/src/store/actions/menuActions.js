const db = require('./db');

// Mendapatkan semua item menu
exports.getAllMenuItems = (req, res) => {
  const sql = 'SELECT * FROM menu_items';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// Mendapatkan item menu berdasarkan ID
exports.getMenuItemById = (req, res) => {
  const menuId = req.params.id;
  const sql = 'SELECT * FROM menu_items WHERE id = ?';
  db.query(sql, [menuId], (err, results) => {
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
exports.createMenuItem = (req, res) => {
  const { name, description, price } = req.body;
  const sql = 'INSERT INTO menu_items (name, description, price) VALUES (?, ?, ?)';
  db.query(sql, [name, description, price], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Menu item created');
  });
};

// Memperbarui item menu berdasarkan ID
exports.updateMenuItem = (req, res) => {
  const menuId = req.params.id;
  const { name, description, price } = req.body;
  const sql = 'UPDATE menu_items SET name = ?, description = ?, price = ? WHERE id = ?';
  db.query(sql, [name, description, price, menuId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Menu item not found');
    }
    res.send('Menu item updated');
  });
};

// Menghapus item menu berdasarkan ID
exports.deleteMenuItem = (req, res) => {
  const menuId = req.params.id;
  const sql = 'DELETE FROM menu_items WHERE id = ?';
  db.query(sql, [menuId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Menu item not found');
    }
    res.send('Menu item deleted');
  });
};

