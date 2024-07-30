const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes'); // Import file routes.js

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute dari routes.js
app.use('/api', userRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

