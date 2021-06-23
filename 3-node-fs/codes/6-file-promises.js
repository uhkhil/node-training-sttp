// Write a program to read a file using promises and then async/await

const fs = require("fs");

// fs.promises
//   .readdir("data")
//   .then((files) => {
//     console.log("files", files);
//     return files;
//   })
//   .then((files) => {
//     files.forEach((file) => {
//       const stat = fs.statSync("data/" + file);
//       console.log(stat.isDirectory());
//       throw new Error("Random error");
//     });
//   })
//   .catch((error) => {
//     console.error("Error: ", error);
//   })
//   .then(() => {
//     console.log("Last then got called");
//   });

const fileContent = fs.readFileSync("read-file-2.txt", "utf8");
console.log("Sync version", fileContent);

(async () => {
  const fileContent = await fs.promises.readFile("read-file-2.txt", "utf-8");
  console.log("Async version", fileContent);
})();
