import reply_message from "./src/reply_op.js";
import readline from "readline";
import { start } from "repl";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let run = true;

const getInput = () => {
  let incoming_msg = reader.question(">>> ", (message) => {
    if (message === "quit") {
      console.log("A bientot");
      reader.close();
    } else {
      console.log(reply_message(message.toLocaleLowerCase()));
      getInput();
    }
  });
};

getInput();
