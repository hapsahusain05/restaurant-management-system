const db = require('./db');

// Mendapatkan semua menu
exports.getAllMenus = (callback) => {
  const sql = 'SELECT * FROM menus';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Mendapatkan menu berdasarkan ID
exports.getMenuById = (id, callback) => {
  const sql = 'SELECT * FROM menus WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    if (results.length === 0) {
      return callback(new Error('Menu not found'), null);
    }
    callback(null, results[0]);
  });
};

// Menambahkan menu baru
exports.createMenu = (menuData, callback) => {
  const { name, description, price } = menuData;
  const sql = 'INSERT INTO menus (name, description, price) VALUES (?, ?, ?)';
  db.query(sql, [name, description, price], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, { id: result.insertId, ...menuData });
  });
};

// Memperbarui menu berdasarkan ID
exports.updateMenu = (id, menuData, callback) => {
  const { name, description, price } = menuData;
  const sql = 'UPDATE menus SET name = ?, description = ?, price = ? WHERE id = ?';
  db.query(sql, [name, description, price, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    if (result.affectedRows === 0) {
      return callback(new Error('Menu not found'), null);
    }
    callback(null, { id, ...menuData });
  });
};

// Menghapus menu berdasarkan ID
exports.deleteMenu = (id, callback) => {
  const sql = 'DELETE FROM menus WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    if (result.affectedRows === 0) {
      return callback(new Error('Menu not found'), null);
    }
    callback(null, { id });
  });
};

