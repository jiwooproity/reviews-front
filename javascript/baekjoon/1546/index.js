const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1546/std.txt").toString().split("\n");

const length = input[0] * 1;
const scores = input[1].split(" ");
const maxScore = Math.max(...scores);

let answer = 0;

for(let i = 0; i < length; i++) {
    answer += scores[i] / maxScore * 100;
}

console.log(answer / length);