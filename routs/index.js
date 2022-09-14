const routs = require('express').Router();

routs.get('/', (req, res) => {
    res.send('Cynthia Rawlings');
})

module.exports = routs;