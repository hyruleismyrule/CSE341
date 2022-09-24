// ***************
// Routes - routes/index.js
// ***************

// Imports
const express = require('express');
const router = express.Router();

// Main
router.use('/api/contacts', require('./contacts'));

// console.log("made it to the end of routes/index.js");

// Exports
module.exports = router;
