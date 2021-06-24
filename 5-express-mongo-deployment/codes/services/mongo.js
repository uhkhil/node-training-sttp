const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://localhost:27017/");

let _db;

const connect = () => {
  mongoClient.connect().then(() => {
    console.log("Connected to MongoDB");
    _db = mongoClient.db("demo");
  });
};

const db = () => {
  return _db;
};

const disconnect = () => {
  mongoClient.close().then(() => {
    console.log("Disconnected MongoDB");
  });
};

module.exports = {
  connect,
  db,
  disconnect,
};
