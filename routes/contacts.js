// *****************
// Routes - routes/contacts.js
// *****************

// Imports
const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

// Main
// GET / Read
router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContactById);

// POST / Create
router.post("/", contactsController.createContact);

// PUT / Update
router.put("/:id", contactsController.updateContact);

// DELETE
router.delete("/:id", contactsController.deleteContact);

// /**
//  * @swagger
//  * /api/contacts:
//  * get:
//  *  description: Use to request all contacts
//  *  responces:
//  *    "200":
//  *      description: A sucessful responce
//  */

// Exports
module.exports = router;
