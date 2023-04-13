const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10798/std.txt").toString().trim().split("\n");

const lengArray = input.map((el) => el.length);
const maxLeng = Math.max(...lengArray);

let answer = '';
for(let i = 0; i < maxLeng; i++) {
    for(let j = 0; j < input.length; j++) {
        if(input[j][i]) answer += input[j][i];
        else if(input[j][i] === undefined) continue; 
    }
}

console.log(answer);