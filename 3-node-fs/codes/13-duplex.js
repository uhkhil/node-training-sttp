// PassThrough

// Write a pipe to listen to a stream and logs its length

const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("./long-file.txt");
const writeStream = createWriteStream("./long-file-copy.txt");

const report = new PassThrough();

const countNumberOfWords = (sentence, word) => {
  return 100;
};

let total = 0;
let wordCounter = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log("bytes: ", total);
  const stringified = chunk.toString();
  wordCounter += countNumberOfWords(stringified, "the");
  console.log("wordCounter: ", wordCounter);
});

readStream.pipe(report).pipe(writeStream);
