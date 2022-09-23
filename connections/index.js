// *****************
// Connections / Main / Mongo
// *****************

// Connect to mongodb
// Imports
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const { restart } = require("nodemon");
dotenv.config();

// Main
async function getMongoClient() {
    const client = new MongoClient(process.env.MONGODB_URI);
    try {
        await client.connect();
        console.log("database");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    // return client;
}

// Exports
module.exports = {
    getMongoClient
};

// 


// const dotenv = require('dotenv');
// dotenv.config();
// const MongoClient = require('mongodb').MongoClient;

// let _db;

// const initDb = (callback) => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   MongoClient.connect(process.env.MONGODB_URI)
//     .then((client) => {
//       _db = client;
//       callback(null, _db);
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };

// module.exports = {
//   initDb,
//   getDb,
// };