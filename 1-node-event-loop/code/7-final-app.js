// 1. Create a pseudo chat application
// 2. There should be 2 members
// 3. All messages should go to a room Array.
// 4. There should be a notification for all messages.All
// 5. Every member should send 5 messages after 2 seconds.

const EventEmitter = require("events");

const messageTracker = new EventEmitter();

const messages = [];
const members = [
  {
    name: "Bob",
  },
  {
    name: "Tom",
  },
];
const maxMessageCount = 5;

messageTracker.on("message", (textMessage) => {
  messages.push(textMessage);
  console.log("A new message was sent: ", textMessage);
  console.log("All messages so far: ", messages);
});

const timer = setInterval(() => {
  members.forEach((member) => {
    messageTracker.emit("message", `Message from ${member.name}`);
  });
  if (messages.length === maxMessageCount * members.length) {
    clearInterval(timer);
  }
}, 2000);
