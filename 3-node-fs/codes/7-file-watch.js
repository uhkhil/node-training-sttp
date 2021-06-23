// Write a program to watch for changes to a file

const fs = require("fs");

fs.watchFile("read-file-2.txt", { interval: 100 }, (curr, prev) => {
  console.log("File has changed.");
});

console.log("Started listing to file changes in read-file-2.txt");
