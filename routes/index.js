// ***************
// Routes
// ***************

const routes = require('express').Router();

const index = require("../controllers/index");

routes.get('/', index);
routes.get('/cat', index);

module.exports = routes;
