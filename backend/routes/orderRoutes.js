const db = require('./db');

// Mendapatkan semua pesanan
exports.getAllOrders = (req, res) => {
  const sql = 'SELECT * FROM orders';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// Mendapatkan pesanan berdasarkan ID
exports.getOrderById = (req, res) => {
  const orderId = req.params.id;
  const sql = 'SELECT * FROM orders WHERE id = ?';
  db.query(sql, [orderId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Order not found');
    }
    res.json(results[0]);
  });
};

// Menambahkan pesanan baru
exports.createOrder = (req, res) => {
  const { customer_id, product_id, quantity, status } = req.body;
  const sql = 'INSERT INTO orders (customer_id, product_id, quantity, status) VALUES (?, ?, ?, ?)';
  db.query(sql, [customer_id, product_id, quantity, status], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Order created');
  });
};

// Memperbarui pesanan berdasarkan ID
exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { customer_id, product_id, quantity, status } = req.body;
  const sql = 'UPDATE orders SET customer_id = ?, product_id = ?, quantity = ?, status = ? WHERE id = ?';
  db.query(sql, [customer_id, product_id, quantity, status, orderId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Order not found');
    }
    res.send('Order updated');
  });
};

// Menghapus pesanan berdasarkan ID
exports.deleteOrder = (req, res) => {
  const orderId = req.params.id;
  const sql = 'DELETE FROM orders WHERE id = ?';
  db.query(sql, [orderId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Order not found');
    }
    res.send('Order deleted');
  });
};

