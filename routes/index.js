// ***************
// Routes - routes/index.js
// ***************

// Imports
const express = require("express");
const router = express.Router();

// Main
router.use("/api/contacts", require("./contacts"));

// /**
//  * @swagger
//  * /api/contacts:
//  * get:
//  *  description: Use to request all contacts
//  *  responces:
//  *    "200":
//  *      description: A sucessful responce
//  */

// Exports
module.exports = router;
