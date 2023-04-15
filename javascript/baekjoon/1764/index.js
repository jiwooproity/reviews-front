const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1764/std.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const noHear = new Set();
const noSee = new Set();

for(let i = 0; i < input.length; i++) {
    if(i < N) {
        noHear.add(input[i]);
    } else {
        noSee.add(input[i]);
    }
}

const answer = [...noHear].filter((inValue) => noSee.has(inValue));
answer.sort();

console.log(answer.length);
console.log(answer.join("\n"));