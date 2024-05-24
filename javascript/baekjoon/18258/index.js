const fs = require("fs");
const input = fs.readFileSync("./std.txt").toString().trim().split("\n");

const n = input.shift();
const command = input.map((i) => i.split(" "));

const queue = [];

let pointer = 0;
let answer = ``;

for (let i = 0; i < n; i++) {
  let [cmd, value] = command[i];

  switch (cmd) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      if (queue.length > pointer) {
        answer += `${queue[pointer]}\n`;
        pointer += 1;
      } else {
        answer += `-1\n`;
      }
      break;
    case "size":
      answer += `${queue.length - pointer}\n`;
      break;
    case "empty":
      answer += `${queue.length > pointer ? "0" : "1"}\n`;
      break;
    case "front":
      if (queue.length > pointer) {
        answer += `${queue[pointer]}\n`;
      } else {
        answer += `-1\n`;
      }
      break;
    case "back":
      if (queue.length > pointer) {
        answer += `${queue[queue.length - 1]}\n`;
      } else {
        answer += `-1\n`;
      }
      break;
  }
}

console.log(answer);
