// ***************
// Routes
// ***************

const routes = require('express').Router();

const index = require("../controllers/index");

routes.get('/', index);
// routes.get('/cat', index);
const contacts = require("../controllers/contacts");

// routes.get('/', index);
routes.get('/api/contacts', contacts);

module.exports = routes;
