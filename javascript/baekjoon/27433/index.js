const fs = require("fs");
const input = fs.readFileSync("./baekjoon/27433/std.txt").toString().trim().split("\n");
const n = +input[0];

let count = n;
let answer = 1;

const calc = (c) => {
    if(c > 0) {
        answer *= c;
        calc(c - 1);
    } else {
        console.log(answer);
    }
}

calc(count);