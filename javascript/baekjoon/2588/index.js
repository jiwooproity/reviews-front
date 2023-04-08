const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2588/std.txt").toString().split("\n");

const [A, B] = input;

const numberA = parseInt(A);
const numberB = parseInt(B);

for(let i = B.length - 1; i >= 0; i--) {
    console.log(numberA * parseInt(B[i]));
}

console.log(numberA * numberB);