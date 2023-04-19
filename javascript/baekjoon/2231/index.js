const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2231/std.txt").toString().trim().split("\n");

const number = Number(input[0]);

let answer = 0;
for(let i = 0; i < number; i++) {
    let sum = 0;

    const numString = i.toString();

    for(let j = 0; j < numString.length; j++) {
        sum += Number(numString[j]);
    }

    sum += i;

    if(sum === number) {
        answer = i;
        break;
    }
}

console.log(answer);