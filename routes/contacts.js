// *****************
// Routes - routes/contacts.js
// *****************

// Imports
const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// Main
router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getContactById);

router.post('/', contactsController.createContact);

// console.log("Made it to the end of routes/contacts.js")

// Exports
module.exports = router;
