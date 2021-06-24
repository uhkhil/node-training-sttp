// Write a program to use multiple clusters in Node

const cluster = require("cluster");

console.log("Master: ", cluster.isMaster);

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  const express = require("express");
  const app = express();

  app.get("/slow", (req, res) => {
    const now = new Date();
    while (new Date() - now <= 5000) {}
    res.json({ message: "Finished the slow request" });
  });

  app.get("/fast", (req, res) => {
    res.json({ message: "Finished the fast request" });
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}
