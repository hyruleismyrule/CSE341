// *****************
// Routes - routes/contacts.js
// *****************

// Imports
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const contactsController = require('../controllers/contacts');

// Main
// GET
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);

// POST
router.post("/addcontact", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


// Exports
module.exports = router;
