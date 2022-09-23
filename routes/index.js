// ***************
// Routes
// ***************

const routes = require('express').Router();

const index = require("../controllers/index");

routes.get('/', index);
// routes.get('/cat', index);
const contacts = require("../controllers/contacts");
// const contactId = require("../controllers/contacts");

// routes.get('/', index);

// All contacts
routes.get('/api/contacts', contacts);

// One contact by Id
// routes.get('/api/contacts/', contactId);

module.exports = routes;
