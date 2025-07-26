const express = require('express');
const router = express.Router();
const { handleCode } = require('../controllers/aiController');

// POST /api/code
router.post('/code', handleCode);

module.exports = router;
