const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10815/std.txt").toString().trim().split("\n");

const cards = new Set(input[1].split(" "));
const M = Number(input[2]);
const hasCards = input[3].split(" ");

let answer = [];
for(let i = 0; i < M; i++) {
    if(cards.has(hasCards[i])) answer.push("1");
    else answer.push("0");
}

console.log(answer.join(" "));