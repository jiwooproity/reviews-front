const fs = require("fs");
const input = fs.readFileSync("./baekjoon/11650/std.txt").toString().trim().split("\n");

const N = Number(input.shift());
const TDArray = input.map((val) => val.split(" ").map(Number));
const sortArray = TDArray.sort((a, b) => {
    if(a[0] !== b[0]) {
        return a[0] - b[0];
    }

    return a[1] - b[1];
});

let answer = "";
for(let i = 0; i < N; i++) {
    answer += `${sortArray[i][0]} ${sortArray[i][1]}\n`;
}

console.log(answer);