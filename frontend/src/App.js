const express = require('express');
const app = express();
const port = 3000;

// Import rute pengguna
const userRoutes = require('./routes');

// Middleware untuk parsing JSON dari body request
app.use(express.json());

// Gunakan rute untuk endpoint /api
app.use('/api', userRoutes);

// Route dasar untuk memastikan aplikasi berjalan
app.get('/', (req, res) => {
  res.send('Hello World! The API is running.');
});

// Mulai server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

