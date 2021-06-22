const http = require("http");

const randomData = [
  {
    name: "Bob",
    age: 30,
  },
  {
    name: "Tom",
    age: 20,
  },
];

const server = http.createServer((req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    console.log(chunk);
    data += chunk;
  });
  req.on("end", () => {
    console.log(JSON.parse(data));
    res.end();
  });
  console.log(data);
  if (req.url === "/") {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.write(JSON.stringify(randomData, null, 2));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000");
