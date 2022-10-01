// ***************
// Routes - routes/index.js
// ***************

// Imports
const express = require("express");
const router = express.Router();
const path = require('path');

// Main
router.use("/api/contacts", require("./contacts"));

// Exports
module.exports = router;
