const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10810/std.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let array = Array.from({length: N}).fill(0);

for(let n = 0; n < M; n++) {
    const [i, j, k] = input[n].split(" ").map(Number);
    
    for(let put = i; put <= j; put++) {
        array[put - 1] = k;
    }
}

console.log(array.join(" "));