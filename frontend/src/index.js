const express = require('express');
const app = express();
const port = 3000;

// Import routes
const userRoutes = require('./routes');

// Middleware
app.use(express.json()); // Untuk parsing JSON dari body request

// Gunakan routes
app.use('/api', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

