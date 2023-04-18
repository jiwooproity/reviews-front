const fs = require("fs");
const input = fs.readFileSync("./baekjoon/18870/std.txt").toString().trim().split("\n");

const N = Number(input.shift());
const coordinate = input[0].split(" ").map(Number);
const sorted = [...new Set([...coordinate].sort((a, b) => a - b))];

let answer = [];
for(let i = 0 ; i < N; i++) {
    answer.push(sorted.indexOf(coordinate[i]));
}

console.log(answer);