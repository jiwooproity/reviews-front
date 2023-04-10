const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10950/std.txt").toString().split("\n");

let answer = '';
for(let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(" ").map((str) => Number(str));

    if(B) {
        answer += `${A + B}\n`;
    }
};

console.log(answer);