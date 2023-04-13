const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2439/std.txt").toString().trim().split("\n");
const N = Number(input[0]);

let answer = "";

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= N; j++) {
        if(j <= N - i) answer += " ";
        else if(j > N - i) answer += "*";
    }

    answer += "\n";
}

console.log(answer);