const express = require('express');
const app = express();
const port = 3000;

// Import koneksi database dari db.js
const db = require('./db');

// Contoh route untuk mendapatkan data dari database
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

