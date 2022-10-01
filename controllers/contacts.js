// ***************
// Controllers - controllers/contacts.js
// ***************

// Imports
const mongodb = require('../connections/index');
const ObjectId = require('mongodb').ObjectId;
// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

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
module.exports = { getAllContacts, getContactById, createContact };
