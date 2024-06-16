/*const uri = 'mongodb+srv://Morelus:1234@cluster0.tmaf4rl.mongodb.net/';
// const uri = 'mongodb+srv://Morelus:1234@cluster0.tmaf4rl.mongodb.net/'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function example() {
    await client.connect();
    // perform actions on the collection object
}

example();

const collection = client.db("test").collection("devices");

// Perform actions on the collection object

client.close();*/
console.log(process.env.DB_URL);
const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.DB_URL)
        .then(db => console.log('La base de datos esta conectada!'))
        .catch(err => console.error(err));
}

module.exports = { connect };