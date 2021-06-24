// Create an application that connects to a local MongoDB database, and use its data

const express = require("express");
const mongo = require("./services/mongo");
const bodyParser = require("body-parser");

const app = express();
mongo.connect();

// Middelwares
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "The server is healthy." });
});

app.get("/api/courses", (req, res) => {
  mongo
    .db()
    .collection("courses")
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
      res.json({ data: data });
    });
});

app.post("/api/courses", (req, res) => {
  const body = req.body;
  mongo
    .db()
    .collection("courses")
    .insertOne(body)
    .then(() => {
      console.log("Inserted a course");
      res.json({ message: "Inserted the document." });
    });
  // Fetch from DB
  // Send response
});

app.listen(3000, () => {
  console.log("The web server is listening to port 3000");
});
