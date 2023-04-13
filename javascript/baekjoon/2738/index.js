const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2738/std.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map((str) => +str);
const inputArr = input.map((inData) => inData.split(" ").map((str) => +str));

let matrixSumArr = Array.from(Array(N), () => Array(M).fill(0));
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        matrixSumArr[i][j] = inputArr[i][j] + inputArr[i + N][j];
    }
}

let answer = "";
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        answer += matrixSumArr[i][j].toString() + " ";
    }
    
    answer += "\n";
}

console.log(answer);