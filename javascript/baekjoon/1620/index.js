const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1620/std.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const pocketmonList = new Map();

for(let i = 0; i < N; i++) {
    pocketmonList.set(input[i], i + 1);
    pocketmonList.set(`${i + 1}`, input[i]);
}

for(let j = N; j < N + M; j++) {
    console.log(pocketmonList.get(input[j]));
}