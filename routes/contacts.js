// *****************
// Routes / Contacts Router
// *****************

// Imports
const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// Main
// router.get('/', contactsController.getAllContacts);

// router.get('/:id', contactsController.getContactById);

//

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);


// Exports
module.exports = router;










// const routes = require('express').Router();

// const contacts = require("../controllers/contacts");

// // routes.get('/', index);
// routes.get('/contacts', contacts);

// module.exports = routes;
