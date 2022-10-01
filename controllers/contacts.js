// ***************
// Controllers - controllers/contacts.js
// ***************

// Imports
const mongodb = require('../connections/index');
const ObjectId = require('mongodb').ObjectId;

// console.log(mongodb);

// Main
const getAllContacts = async (request, response) => {
  const result = await mongodb.getDb().db('cse341').collection("contacts").find().toArray().then((result) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(result);
  });
  // console.log(result);
};

const getContactById = async (request, response) => {
  const contactId = new ObjectId(request.params.id);

  const result = await mongodb.getDb().db('cse341').collection("contacts").find({ _id: contactId }).toArray().then((result) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(result);
  });
  // console.log(result);
};

const createContact = async (req, res) => {
  console.log(req);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('cse341').collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

// Exports
module.exports = { getAllContacts, getContactById, createContact };
