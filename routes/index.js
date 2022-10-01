// ***************
// Routes - routes/index.js
// ***************

// Imports
const express = require("express");
const router = express.Router();
const path = require('path');

// Main
<<<<<<< HEAD
router.use("/api/contacts", require("./contacts"));
=======
// Contacts API
router.use('/api/contacts', require('./contacts'));

// Frontend index file
router.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});


>>>>>>> origin/master

// Exports
module.exports = router;
