// *****************
// Connections / Main / Mongo
// *****************

// Connect to mongodb
// Imports
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const { restart } = require("nodemon");
dotenv.config();
const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;

// Main
async function getMongoClient() {
    const uri = safeConnectionString;
    const client = new MongoClient(uri);
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

getMongoClient().catch(console.error);

// Exports
module.exports = {
    getMongoClient
};