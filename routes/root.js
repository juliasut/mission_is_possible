const express = require('express');
const router = express.Router();
const path = require('path');

// regex to match route / (in the beginning & end of a tring) or /index with optional .html
router.get('^/$|/index(.html)?', (reg, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;
