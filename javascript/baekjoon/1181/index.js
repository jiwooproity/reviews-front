const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1181/std.txt").toString().trim().split("\n");

const N = +input.shift();
const sortString = [...new Set(input)].sort();
sortString.sort((a, b) => a.length - b.length);

let answer = "";
for(let i = 0; i < sortString.length; i++) {
    answer += `${sortString[i]}\n`;
}

console.log(answer);