// Write a program to list all files in a directory and its sub-directory. 2 levels. Print out its absolute path.
// Expected output
// const fileTree = {
//   "data-2": { "data-2-sample-3.txt": "file", "random-file.txt": "file" },
//   "data-3": "file",
//   "sample-2.txt": "file",
//   "sample.txt": "file",
// };

const fs = require("fs");
const fileTree = {};

fs.readdir("data", (error, files) => {
  if (error) {
    throw error;
  }
  files.forEach((file) => {
    const stat = fs.statSync("data/" + file);
    fileTree[file] = "file";
    if (stat.isDirectory()) {
      fileTree[file] = {};
      const subFiles = fs.readdirSync("data/" + file);
      subFiles.forEach((subFile) => {
        fileTree[file][subFile] = "file";
      });
    }
  });
  console.log(fileTree);
});
