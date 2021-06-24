const express = require("express");
const bodyparser = require("body-parser");
const courseService = require("./services/courses");
const logger = require("./middelwares/logger");

const app = express();

// Middleware to parse the Body in POST/PUT requests
app.use(bodyparser.json());

// Middelware to log all the APIs
app.use(logger);

// Get server health status
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/health", (req, res) => {
  res.send("Hello World");
});

process.on("uncaughtException", function (err) {
  console.log("SOmething went wrong");
  process.exit(1);
});

throw "error";

// Fetch all courses
app.get("/api/courses", (req, res) => {
  console.log(req.query);
  let maxFees;
  let search;
  if (req.query.max_fees) {
    maxFees = parseInt(req.query.max_fees, 10);
  }
  if (req.query.search) {
    search = req.query.search;
  }
  res.json({
    message: "Fetched all courses",
    data: courseService.getCourses({ maxFees: maxFees, search: search }),
  });
});

// Create a course
app.post("/api/courses", (req, res) => {
  courseService.createCourse(req.body);
  res.json({ message: "Created courses" });
});

app.listen(3000, () => {
  console.log("Server has started.");
});
