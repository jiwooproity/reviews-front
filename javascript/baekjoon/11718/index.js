const fs = require("fs");
const input = fs.readFileSync("./std.txt").toString().split("\n");

input.forEach((text) => {
  console.log(text);
});
