const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2750/std.txt").toString().split("\n");

input.shift();
const answer = input.sort((a, b) => a - b);

for(let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}