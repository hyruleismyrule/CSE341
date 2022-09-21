// //  controller

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;

let allContacts = "";

async function main() {

    const uri = safeConnectionString;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        allContacts = await getAllContacts(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

    // console.log(allContacts);
    
}


async function getAllContacts(client) {

    const result = await client.db("cse341").collection("contacts").find().toArray();

    return result;
}


const contacts = (request, response) => {
    main().catch(console.error);
    response.send(allContacts);
};



module.exports = contacts;
