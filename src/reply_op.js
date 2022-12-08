import chat_map from "./chat_map.js";
import reply_map from "./reply_map.js";

const reply_message = (message) => {
  if (message === "urgent") {
    return "Sorry, I'm not available right now. Please leave a message and I'll get back to you as soon as I can.";
  }

  let reply_index = null;

  let reply = chat_map.forEach((element) => {
    element.chats.forEach((reply) => {
      if (reply === message) {
        reply_index = element.index;
      }
    });
  });

  if (reply_index !== null) {
    return reply_map[reply_index - 1];
  } else {
    return "I don't understand :( ";
  }
};

export default reply_message;
