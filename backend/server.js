const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.post('/api/code', (req, res) => {
  const { code, language } = req.body;
  console.log(`Received code:\n${code}\nLanguage: ${language}`);
  res.json({
    message: 'Code received successfully.',
    language: language,
    inputLength: code.length
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
