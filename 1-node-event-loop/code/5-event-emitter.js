const EventEmitter = require("events");

const event = new EventEmitter();
event.on("message", () => {
  console.log("Some message came.");
});

event.emit("message");
event.emit("message");
event.emit("message2");

event.on("message2", (data) => {
  console.log("Some other message came.", data.text);
});

event.emit("message2", { text: "hello" });
