const fs = require("fs");

// Creating folders
// mkdir
// fs.mkdir("data", {}, (error) => {
//   if (error) {
//     console.error("Error: ", error);
//   } else {
//     console.log("Created the folder");
//   }
// });

// Checking if a folder exist or not
// exists
// stat
// access
// DEPRECATED, DO NOT USE THIS. This can get removed in the future.
// fs.exists("data", (exists) => {
//   if (exists) {
//     console.log("This file/folder exists");
//   } else {
//     console.log("File/folder does not exist.");
//   }
// });

// Used for checking permission, not for checking if file exists
// fs.access("data", () => {
//   console.log("File exists.");
// });

// fs.stat("data", (error, stat) => {
//   if (error) {
//     console.error("Error: ", error);
//   } else {
//     console.log("The file exists", stat);
//   }
// });

// Delete folders
// rmdir
// fs.rmdir("data", () => {
//   console.log("Folder got deleted");
// });

// Listing files
// readdir
fs.readdir("data", (error, files) => {
  if (error) {
    console.error(Error);
  } else {
    console.log("Files: ", files);
  }
});
