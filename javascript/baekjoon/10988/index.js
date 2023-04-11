const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10988/std.txt").toString().trim().split("\n")[0];
const char = [...input];

let answer = 0;
const left = char.slice(0, Math.floor(char.length / 2));
const right = char.length % 2 === 0 ? char.slice(Math.floor(char.length / 2), char.length).reverse() : char.slice(Math.floor(char.length / 2) + 1, char.length).reverse();

if(left.join("") === right.join("")) answer = 1;
else answer = 0;

console.log(answer);