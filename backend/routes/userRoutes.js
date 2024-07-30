const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./userRoutes');

app.use(express.json()); // Untuk parsing JSON dari body request
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


