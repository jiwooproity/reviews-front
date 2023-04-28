const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1016/std.txt").toString().trim().split("\n");
const [min, max] = input[0].split(" ").map(Number);

let answer = 0;
for(let i = min; i <= max; i++) {
    if(i * i > max) answer += 1;
    else continue;
}

console.log(answer);