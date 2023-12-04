// server.js
import express from 'express';
import homeRouter from './api/home.js';

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the homeRouter for routes starting with '/api/home'
app.use('/api/home', homeRouter);

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
