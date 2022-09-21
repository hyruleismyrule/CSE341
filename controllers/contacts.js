// //  controller

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;

async function main() {

    const uri = safeConnectionString;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await findOneContactByName(client, "Natasha");

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

async function findOneContactByName(client, nameOfContact) {
    const result = await client.db("cse341").collection("contacts").findOne({firstName: nameOfContact});

    if (result) {
        console.log(`Found a contact in the collection with the name "${nameOfContact}"`);
        console.log(result);
    }
    else {
        console.log(`No contacts were found with the name "${nameOfContact}"`);
    }
}


const contacts = (request, response) => {
    
    response.send("Contacts here");
};

module.exports = contacts;




















// // Database
// const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");
// dotenv.config();
// const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;


// async function main() {

//     const uri = safeConnectionString;

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         // await listDatabases(client);

//         await findOneClientByName(client, came)


//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
    
// }

// main().catch(console.error);


// async function findOneListingByName(client, nameOfListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

//     if (result) {
//         console.log(`Found a listing in the collection with the name "${nameOfListing}"`);
//         console.log(result);
//     }
//     else {
//         console.log(`No listings were found with the name "${nameOfListing}"`);
//     }
// }





// // // async function main() {

// // //     const uri = safeConnectionString;

// // //     const client = new MongoClient(uri);

// // //     try {
// // //         await client.connect();

// // //         await getContacts(client);

// // //         // await listDatabases(client);

// // //     } catch (e) {
// // //         console.error(e);
// // //     } finally {
// // //         await client.close();
// // //     }

// // // }

// // // main().catch(console.error);

// // function getContacts() {

// //     const uri = safeConnectionString;

// //     const client = new MongoClient(uri);

// //     try {
// //         client.connect();

// //         getContacts(client);

// //         const results = client.db("cse341").collection("contacts");
        

// //         // Store the results in an array
// //         // const results = cursor.toArray();
    
// //         return results;

// //         // await listDatabases(client);

// //     } catch (e) {
// //         console.error(e);
// //     } finally {
// //         client.close();
// //     }

    
// //     // const cursor = client.db("cse341").collection("contacts")
        

// //     // // Store the results in an array
// //     // const results = await cursor.toArray();

// //     // return results;

// //     // Print the results
// //     // if (results.length > 0) {
// //     //     console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
// //     //     results.forEach((result, i) => {
// //     //         const date = new Date(result.last_review).toDateString();

// //     //         console.log();
// //     //         console.log(`${i + 1}. name: ${result.name}`);
// //     //         console.log(`   _id: ${result._id}`);
// //     //         console.log(`   bedrooms: ${result.bedrooms}`);
// //     //         console.log(`   bathrooms: ${result.bathrooms}`);
// //     //         console.log(`   most recent review date: ${date}`);
// //     //     });
// //     // } else {
// //     //     console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
// //     // }
// // }


// // const contacts = (request, response) => {
// //     // const uri = safeConnectionString;

// //     // const client = new MongoClient(uri);

// //     // try {
// //     //     client.connect();

// //     //     getContacts(client);

// //     //     // await listDatabases(client);

// //     // } catch (e) {
// //     //     console.error(e);
// //     // } finally {
// //     //     client.close();
// //     // }
// //     // response.send("Contacts here");

// //     const data = getContacts();

// //     response.send(data);

// //     console.log(data);
// // };

// // module.exports = contacts;