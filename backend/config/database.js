const uri = 'mongodb+srv://Morelus:1234@cluster0.tmaf4rl.mongodb.net/';
// const uri = 'mongodb+srv://Morelus:1234@cluster0.tmaf4rl.mongodb.net/'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function example() {
    await client.connect();
    // perform actions on the collection object
}

example();

const collection = client.db("test").collection("devices");

// Perform actions on the collection object

client.close();