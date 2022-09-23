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

// 

// const mongodb = require('../connections/index');
// const ObjectId = require('mongodb').ObjectId;

// const getAll = async (req, res, next) => {
//   const result = await mongodb.getDb().db().collection('contacts').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists);
//   });
// };

// const getSingle = async (req, res, next) => {
//   const userId = new ObjectId(req.params.id);
//   const result = await mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find({ _id: userId });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

// module.exports = { getAll, getSingle };