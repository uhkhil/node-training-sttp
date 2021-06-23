const fs = require("fs");

fs.readFile("read-file.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Something went wrong: ", error);
  }
  console.log(data);
});
