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

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);