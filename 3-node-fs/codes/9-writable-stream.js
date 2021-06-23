// createWriteStream
const fs = require("fs");

const writeStream = fs.createWriteStream("write-file-copy.txt");
writeStream.write("This is a sample.");

const readStream = fs.createReadStream("long-file.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
