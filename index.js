const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // You can choose any available port number
require('./Config/db');
// Middleware to parse JSON requests
app.use(express.json());
 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});