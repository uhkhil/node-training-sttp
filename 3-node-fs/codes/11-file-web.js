// Create a web server that returns things from a file

const fs = require("fs");
const http = require("http");

// The normal way to read a file and send it in the http response

// const server = http.createServer((req, res) => {
//   console.log(req);
//   if (req.url === "/read-file") {
//     fs.readFile("long-file.txt", { encoding: "utf-8" }, (error, data) => {
//       if (error) {
//         throw error;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(3000);

// console.log("Listening on port 3000");

// ....................

// The stream way to pipe the file to the http response

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/read-file") {
    const readStream = fs.createReadStream("long-file.txt");
    readStream.pipe(res);
  }
});

server.listen(3000);

console.log("Listening on port 3000");
