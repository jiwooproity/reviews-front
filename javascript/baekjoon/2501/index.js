const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2501/std.txt").toString().trim().split("\n");

const data = input[0].split(" ");
const n = +data[0];
const k = +data[1];

const array = []
for(let i = 1; i <= n; i++) {
    if(n % i === 0) array.push(i);
}

console.log(array[k - 1] ? array[k - 1] : 0);