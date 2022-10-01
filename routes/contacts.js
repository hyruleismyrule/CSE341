// *****************
// Routes - routes/contacts.js
// *****************

// Imports
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const contactsController = require("../controllers/contacts");

// Main
<<<<<<< HEAD
// GET / Read
router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContactById);

// POST / Create
router.post("/", contactsController.createContact);

// PUT / Update
router.put("/:id", contactsController.updateContact);

// DELETE
router.delete("/:id", contactsController.deleteContact);
=======
// GET
router.get('/contact', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);

// POST
// router.post('/addContact', urlencodedParser, contactsController.createContact);
router.post('/addContact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('/contact', {qs: res.query});
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

>>>>>>> origin/master

// Exports
module.exports = router;
