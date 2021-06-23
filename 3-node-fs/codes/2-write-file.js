const fs = require("fs");

// fs.writeFileSync("write-file.txt", "This is some other sample text");

fs.writeFile("write-file-2.txt", "This is the 2nd write file.", {}, () => {
  console.log("We have written to a file.");
});
