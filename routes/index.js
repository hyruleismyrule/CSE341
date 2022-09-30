// ***************
// Routes - routes/index.js
// ***************

// Imports
const express = require('express');
const router = express.Router();
const path = require('path');

// Main
// Contacts API
router.use('/api/contacts', require('./contacts'));

// Frontend index file
router.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});



// Exports
module.exports = router;
