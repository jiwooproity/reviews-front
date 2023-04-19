const fs = require("fs");
const input = fs.readFileSync("./baekjoon/25192/std.txt").toString().trim().split("\n");
input.shift();

let count = 0;
const set = new Set();

for(let i = 0; i < input.length; i++) {
    if(input[i] === "ENTER") {
        count += set.size;
        set.clear();
        continue;
    }

    set.add(input[i]);

    if(i === input.length - 1) {
        count += set.size;
    }
}

console.log(count);