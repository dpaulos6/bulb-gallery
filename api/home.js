// api/home.js
const express = require('express');
const router = express.Router();

// Define routes for the '/api/home' endpoint

// Example route: GET /api/home
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the home API!' });
});

// Example route: POST /api/home
router.post('/', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}! This is the home API.` });
});

module.exports = router;
