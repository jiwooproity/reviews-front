const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10870/std.txt").toString().trim().split("\n");
const n = +input[0];

const calc = (q) => {
    if(q === 0) return 0;
    else if(q === 1) return 1;
    else return calc(q - 1) + calc(q - 2);
}

console.log(calc(n));