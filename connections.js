const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const safeConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zxiazbs.mongodb.net/?retryWrites=true&w=majority`;

async function main() {

    const uri = safeConnectionString;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        // await listDatabases(client);

        // await createListing(client, {
        //     name: "Lovely Loft",
        //     summary: "A charming loft in Paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // });

        // await createMultipleListings(client, [
        //     {
        //         name: "Infinite Views",
        //         summary: "Modern home with indinite views from the infinity pool.",
        //         property_type: "House",
        //         bedrooms: 5,
        //         bathrooms: 4.5,
        //         beds: 5
        //     },
        //     {
        //         name: "Infinite Views2",
        //         summary: "Modern home with indinite views from the infinity pool2.",
        //         property_type: "House",
        //         bedrooms: 5,
        //         bathrooms: 4.5,
        //         beds: 5
        //     },
        //     {
        //         name: "Infinite Views3",
        //         summary: "Modern home with indinite views from the infinity pool3.",
        //         property_type: "House",
        //         bedrooms: 5,
        //         bathrooms: 4.5,
        //         beds: 5
        //     }
        // ]);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
    // stop here for now, 18:26
    client.db("sample_airbnb").collection("listingsAndReviews").findOne()
}

async function createMultipleListings(client, newListings) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listings created created with the following id(s):`);
    console.log(result.insertedIds);
}

async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    // Note, it did not work. Id was undefined.
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}