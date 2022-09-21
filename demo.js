// const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");
// dotenv.config();
// const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;

// async function main() {

//     const uri = safeConnectionString;

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         await findOneContactByName(client, "Natasha");

//         // await listDatabases(client);

//         // await createListing(client, {
//         //     name: "Lovely Loft",
//         //     summary: "A charming loft in Paris",
//         //     bedrooms: 1,
//         //     bathrooms: 1
//         // });

//         // await createMultipleListings(client, [
//         //     {
//         //         name: "Infinite Views",
//         //         summary: "Modern home with indinite views from the infinity pool.",
//         //         property_type: "House",
//         //         bedrooms: 5,
//         //         bathrooms: 4.5,
//         //         beds: 5
//         //     },
//         //     {
//         //         name: "Infinite Views2",
//         //         summary: "Modern home with indinite views from the infinity pool2.",
//         //         property_type: "House",
//         //         bedrooms: 5,
//         //         bathrooms: 4.5,
//         //         beds: 5
//         //     },
//         //     {
//         //         name: "Infinite Views3",
//         //         summary: "Modern home with indinite views from the infinity pool3.",
//         //         property_type: "House",
//         //         bedrooms: 5,
//         //         bathrooms: 4.5,
//         //         beds: 5
//         //     }
//         // ]);

//         // await findOneListingByName(client, "Infinite Views");

//         // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
//         //     minimumNumberOfBedrooms = 4,
//         //     minimumNumberOfBathrooms = 2,
//         //     maximumNumberOfResults = 5
//         // } = {})

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
    
// }

// main().catch(console.error);

// // async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
// //     minimumNumberOfBedrooms = 0,
// //     minimumNumberOfBathrooms = 0,
// //     // maximumNumberOfResults = Number.MAX_SAFE_INTEGER
// //     // Note that without this result crashed the program
// //     maximumNumberOfResults = 5
// // } = {}) {

// //     // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
// //     const cursor = client.db("sample_airbnb").collection("listingsAndReviews")
// //         .find({
// //             bedrooms: { $gte: minimumNumberOfBedrooms },
// //             bathrooms: { $gte: minimumNumberOfBathrooms }
// //         }
// //         )
// //         .sort({ last_review: -1 })
// //         .limit(maximumNumberOfResults);

// //     // Store the results in an array
// //     const results = await cursor.toArray();

// //     // Print the results
// //     if (results.length > 0) {
// //         console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
// //         results.forEach((result, i) => {
// //             const date = new Date(result.last_review).toDateString();

// //             console.log();
// //             console.log(`${i + 1}. name: ${result.name}`);
// //             console.log(`   _id: ${result._id}`);
// //             console.log(`   bedrooms: ${result.bedrooms}`);
// //             console.log(`   bathrooms: ${result.bathrooms}`);
// //             console.log(`   most recent review date: ${date}`);
// //         });
// //     } else {
// //         console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
// //     }
// // }

// // async function findOneListingByName(client, nameOfListing) {
// //     const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

// //     if (result) {
// //         console.log(`Found a listing in the collection with the name "${nameOfListing}"`);
// //         console.log(result);
// //     }
// //     else {
// //         console.log(`No listings were found with the name "${nameOfListing}"`);
// //     }
// // }

// // async function createMultipleListings(client, newListings) {
// //     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

// //     console.log(`${result.insertedCount} new listings created created with the following id(s):`);
// //     console.log(result.insertedIds);
// // }

// // async function createListing(client, newListing) {
// //     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

// //     // Note, it did not work. Id was undefined.
// //     console.log(`New listing created with the following id: ${result.insertedId}`);
// // }

// // async function listDatabases(client) {
// //     const databasesList = await client.db().admin().listDatabases();

// //     console.log("Databases:");
// //     databasesList.databases.forEach(db => {
// //         console.log(`- ${db.name}`);
// //     });
// // }


// async function findOneContactByName(client, nameOfContact) {
//     const result = await client.db("cse341").collection("contacts").findOne({firstName: nameOfContact});

//     if (result) {
//         console.log(`Found a contact in the collection with the name "${nameOfContact}"`);
//         console.log(result);
//     }
//     else {
//         console.log(`No contacts were found with the name "${nameOfContact}"`);
//     }
// }

console.log("demo.js");