// ***************
// Controllers / Contacts Controller
// ***************

// Imports
const client = require('../connections/index');
const ObjectId = require('mongodb').ObjectId;

// Main
const getAllContacts = async (request, response) => {
    const result = await client.db("cse341").collection("contacts").find().toArray().then((result) => {
        response.setHeader('Content-Type', 'application/json');
        response.status(200).json(result);
    });
};

const getContactById = async (request, response) => {
    const contactId = new ObjectId(request.params.id);

    const result = await client.db("cse341").collection("contacts").findOne({"_id": contactId}).toArray().then((result) => {
        response.setHeader('Content-Type', 'application/json');
        response.status(200).json(result);
    });
};

// Exports
module.exports = { getAllContacts, getContactById };