// *****************
// Connections - connections/index.js
// *****************

// Connect to mongodb
// Imports
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

// Main
let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

// Exports
module.exports = {
  initDb,
  getDb,
};
