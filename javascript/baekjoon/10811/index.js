const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10811/std.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let basket = Array.from({length: N}, (v, i) => i + 1);

for(let i = 0; i < M; i++) {
    const [I, J] = input[i].split(" ").map(Number);

    const change = [];
    for(let j = I; j <= J; j++) {
        change.push(basket[j - 1]);
    }

    console.log(change)

    for(let j = I; j <= J; j++) {
        basket[j - 1] = change.pop();
    }
}

console.log(basket.join(" "));