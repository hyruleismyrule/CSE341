// ***************
// Routes / Main Router
// ***************

// Imports
const express = require('express');
const router = express.Router();

// Main
router.use('/contacts', require('./contacts'))

// Exports
module.exports = router;


// routes.get('/api/contacts/', contactId);
// routes.get('/cat', index);
// const contactId = require("../controllers/contacts");
// routes.get('/', index);


// const routes = require('express').Router();
// const index = require("../controllers/index");
// routes.get('/', index);
// const contacts = require("../controllers/contacts");
// routes.get('/api/contacts', contacts);
// module.exports = routes;
