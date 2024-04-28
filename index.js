// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the specified port or default to 3000

// Define your /status route
app.get('/status', (req, res) => {
  res.status(200).json({ response: 'active' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
