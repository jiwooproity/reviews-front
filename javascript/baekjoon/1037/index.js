const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1037/std.txt").toString().trim().split("\n");

const leng = Number(input.shift());
const A = input[0].split(" ").map(Number);

const max = Math.max(...A);
const min = Math.min(...A);

console.log(max * min)