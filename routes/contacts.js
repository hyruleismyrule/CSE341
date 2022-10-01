// *****************
// Routes - routes/contacts.js
// *****************

// Imports
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const contactsController = require('../controllers/contacts');

// Main
// GET
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);

// POST
// router.post('/addContact', urlencodedParser, contactsController.createContact);
router.post('/addContact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact', {qs: res.query});
});





// router.post('/addContact')

// router.post('/', contactsController.createContact);


// router.post("/addcontact", (req, res) => {
//     let contact = new contacts(req.body);
//     contact.save()
//         .then(item => {
//             res.send("item saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
// });


// Exports
module.exports = router;
