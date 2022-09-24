// *****************
// Connections - connections/index.js
// *****************

// Connect to mongodb
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

let codeUsername = process.env.DB_USERNAME;
let codePass = process.env.DB_PASSWORD;
let secureString = "mongodb+srv://" + codeUsername + ":" + codePass + "@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority";
console.log(secureString);

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  // MongoClient.connect(process.env.MONGODB_URI)
  MongoClient.connect(secureString)
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

module.exports = {
  initDb,
  getDb,
};
