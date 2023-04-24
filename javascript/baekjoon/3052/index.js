const fs = require("fs");
const input = fs.readFileSync("./baekjoon/3052/std.txt").toString().trim().split("\n");

const unique = new Set();
const numbers = input.map(Number);

for(let i = 0; i < numbers.length; i++) {
    unique.add(numbers[i] % 42);
}

console.log([...unique].length);