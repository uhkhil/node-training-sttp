const Logger = require("./4-logger");

const logger = new Logger();

const EVENT_NAME = {
  MESSAGE: "message",
};

function storeToDB(text) {
  console.log("Stored to DB", text);
}

function informAllPeople(text) {
  console.log("Sending notification to all people", text);
}

logger.on("message", storeToDB);
logger.on("message", informAllPeople);

logger.log("Heey there!");
