// ***************
// Controllers - controllers/contacts.js
// ***************

// Imports
<<<<<<< HEAD
const mongodb = require("../connections/index");
const ObjectId = require("mongodb").ObjectId;
=======
const mongodb = require('../connections/index');
const ObjectId = require('mongodb').ObjectId;
// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
>>>>>>> origin/master

// console.log(mongodb);

// Main
<<<<<<< HEAD
// GET / Read
// All
const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db("cse341").collection("contacts").find().toArray().then((result) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  });
};

// One
const getContactById = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
=======

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
>>>>>>> origin/master

  const result = await mongodb.getDb().db("cse341").collection("contacts").find({ _id: contactId }).toArray().then((result) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  });
<<<<<<< HEAD
};

// POST / Create
// One
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db("cse341").collection("contacts").insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || "Some error occurred while creating the contact.");
  }
};

// PUT / Update
const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db("cse341").collection("contacts").replaceOne({ _id: contactId }, contact);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the contact.");
  }
};

// DELETE
const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db("cse341").collection("contacts").deleteOne({ _id: contactId }, true);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while deleting the contact.");
  }
=======
>>>>>>> origin/master
};

// POST / Create
// Create Single Contact
// const createContact = async (req, res) => {
//   const contact = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     favoriteColor: req.body.favoriteColor,
//     birthday: req.body.birthday
//   };
//   const response = await mongodb.getDb().db('cse341').collection("contacts").insertOne(contact);
//   if (response.acknowledged) {
//     res.status(201).json(response);
//   } else {
//     res.status(500).json(response.error || 'Some error occurred while creating the contact.');
//   }
// };

const createContact = async (req, res) => {
  // let contact = {
  //   "firstName": "Panda",
  //   "lastName": "Morton",
  //   "email": "tuxedocat@gmail.com",
  //   "favoriteColor": "Pink",
  //   "birthday": "12/25/2015"
  // }
  const result = await mongodb.getDb().db('cse341').collection("contacts").insertOne(contact);

  console.log(result.insertedId);

}


// Exports
<<<<<<< HEAD
module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
=======
module.exports = { getAllContacts, getContactById, createContact };
>>>>>>> origin/master
