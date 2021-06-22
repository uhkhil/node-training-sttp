const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", message);
  }
}

module.exports = Logger;
