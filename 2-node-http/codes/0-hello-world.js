const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
});

server.on("connection", (socket) => {
  // Very low level, rarely used
  console.log("New connection: ", socket);
});

server.listen(3000);

console.log("Listening on port 3000");
