const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to MongoDB (skeleton for future use)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Placeholder routes for future expansion
// app.use('/api/services', require('./routes/services')); // Add routes folder/files later

// Basic endpoint for testing
app.get('/', (req, res) => {
  res.send('Backend API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));