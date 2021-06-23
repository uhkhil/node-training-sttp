// createReadStream
const fs = require("fs");

const readStream = fs.createReadStream("long-file.txt", { encoding: "utf8" });

let chunkCount = 0;
let fileContentLength = 0;
readStream
  .on("data", (chunk) => {
    chunkCount++;
    fileContentLength += chunk.length;
    console.log("Chatacters in the chunk: ", chunk.length);
  })
  .on("end", () => {
    console.log("Characters in the file: ", fileContentLength);
    console.log("Total Chunks: ", chunkCount);
  });
