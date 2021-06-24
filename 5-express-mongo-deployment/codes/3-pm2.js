// Write a program to use multiple clusters in Node

const express = require("express");
const app = express();

app.get("/slow", (req, res) => {
  const now = new Date();
  while (new Date() - now <= 5000) {}
  res.json({ message: "Finished the slow request" });
});

// app.get("/fast", (req, res) => {
//   try {
//     throw new Error("Applications wants to crash");
//   } catch (err) {
//     res.status(500);
//     res.json({ message: "Something went wrong" });
//   }
//   res.json({ message: "Finished the fast request" });
// });

process.on("uncaughtException", () => {
  console.log("Something is breaking.");
  process.exit(1);
});

throw new Error("Applications wants to crash");

app.get("/fast", (req, res) => {
  res.json({ message: "Finished the fast request" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
