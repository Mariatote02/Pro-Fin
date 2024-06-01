const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function example() {
    await client.connect();
    // perform actions on the collection object
}

example();

const collection = client.db("test").collection("devices");

// Perform actions on the collection object

client.close();