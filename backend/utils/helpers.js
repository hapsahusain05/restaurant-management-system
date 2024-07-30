const db = require('./db');
const { validateEmail, generateUniqueId, handleError } = require('./helpers');

// Mendapatkan semua pengguna
exports.getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      return handleError(err, res);
    }
    res.json(results);
  });
};

// Menambahkan pengguna baru
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const id = generateUniqueId();
  const sql = 'INSERT INTO users (id, name, email) VALUES (?, ?, ?)';
  db.query(sql, [id, name, email], (err, result) => {
    if (err) {
      return handleError(err, res);
    }
    res.status(201).send('User created');
  });
};

