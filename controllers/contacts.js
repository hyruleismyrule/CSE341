// ***************
// Controllers - controllers/contacts.js
// ***************

// Imports
const mongodb = require('../connections/index');
const ObjectId = require('mongodb').ObjectId;

// console.log(mongodb);

// Main

// GET / Read
// All
const getAllContacts = async (request, response) => {
  const result = await mongodb.getDb().db('cse341').collection("contacts").find().toArray().then((result) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(result);
  });
};

// Single by Id
const getContactById = async (request, response) => {
  const contactId = new ObjectId(request.params.id);

  const result = await mongodb.getDb().db('cse341').collection("contacts").find({ _id: contactId }).toArray().then((result) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(result);
  });
};

// POST / Create
// Create Single Contact







// Exports
module.exports = { getAllContacts, getContactById };
