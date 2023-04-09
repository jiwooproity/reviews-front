const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10430/std.txt").toString().split("\n");

const data = input[0].split(" ").map((str) => parseInt(str));
const [A, B, C] = data;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);