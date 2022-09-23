// ******************
// This is the contacts controller

// Connect to mongodb
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const { restart } = require("nodemon");
dotenv.config();
const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;

// Get all contacts
let allContacts = "";
let idContact = "";
async function main() {
    const uri = safeConnectionString;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        allContacts = await getAllContacts(client);
        idContact = await getOneContactsById(client, "632b8e645f590ab44e8023c4");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    // console.log(allContacts);
    // console.log(idContact);
}
async function getAllContacts(client) {
    const result = await client.db("cse341").collection("contacts").find().toArray();
    return result;
}
async function getOneContactsById(client, contactId) {
    let ObjectID = require('mongodb').ObjectID;
    let o_id = new ObjectID(contactId);
    const result = await client.db("cse341").collection("contacts").findOne({"_id": o_id});
    return result;    
}
const contacts = (request, response) => {
    main().catch(console.error);
    // response.send(allContacts);
    response.send(idContact);
};
module.exports = contacts;
// module.exports = {
//     contacts
// }
// module.exports.allContacts = contacts;
// module.exports = contacts;
