const fs = require("fs");
const input = fs.readFileSync("./baekjoon/14425/std.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const NString = new Set(input.slice(0, N));
const MString = input.slice(N, N + M);

let answer = 0;
for(let i = 0; i < MString.length; i++) {
    if(NString.has(MString[i])) answer += 1;
}

console.log(answer)