const fs = require("fs");

// Rename
// fs.rename("read-file.txt", "read-file-2.txt", (error) => {
//   console.log("Error: ", error);
// });

fs.unlink("write-file.txt", () => {
  console.log("File has been deleted.");
});
