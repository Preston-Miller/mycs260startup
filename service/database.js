const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
client.connect(err => {
  const collection = client.db("test").collection("devices");

  // ... perform actions on the DB collection

  client.close();
});