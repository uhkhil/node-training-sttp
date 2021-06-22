const http = require("http");
const courses = require("./data");
const { stringify } = require("./utils");

const PORT = 3000;

// CRUD - This is the convention followed for CRUD operations in REST. This is NOT a rule.
// GET /health - Sends back the result of the system
// GET /api/courses - Fetch a list of courses
// GET /api/courses/123 - Fetch 1 course with the id mentioned
// POST /api/courses - Create a course with the body mentioned in the request
// PUT /api/courses/123 - Updating an exisitng resource
// PATCH /api/corses/123 - Same as above
// DELETE /api/courses/123 - Deleting a course

const server = http.createServer((req, res) => {
  // Parse all the request bodies
  let data = "";
  req.on("data", (chunk) => {
    console.log(chunk);
    data += chunk;
  });
  req.on("end", () => {
    console.log(data);
    if (data) {
      data = JSON.parse(data);
      console.log(data);
    }
    if (req.url === "/health") {
      if (req.method.toLowerCase() === "get") {
        res.write(stringify({ message: "Server is healthy." }));
        res.end();
      }
    } else if (req.url === "/api/courses") {
      if (req.method.toLowerCase() === "get") {
        // Fetched from DB
        // Send the response
        res.write(
          stringify({ message: "Fetched all the courses.", data: courses })
        );
        res.end();
      } else if (req.method.toLowerCase() === "post") {
        // Store to DB
        console.log(data);
        courses.push(data);
        console.log("courses", courses);
        // Send the response
        res.write(stringify({ message: "Successfully stored the course." }));
        res.end();
      }
    }
  });
});

server.listen(PORT);

console.log(`Server has started. Listening on port ${PORT}.`);
