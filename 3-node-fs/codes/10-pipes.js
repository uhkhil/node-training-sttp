// Write a program to read from a file and write to another file using pipe
const fs = require("fs");

const readStream = fs.createReadStream("long-file.txt", "utf8");
const writeStream = fs.createWriteStream("long-file-copy.txt");

readStream.pipe(writeStream);

// process.stdin.pipe(process.stdout);
