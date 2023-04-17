const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1427/std.txt").toString().trim().split("\n");

const sortArray = [...input[0]].sort((a, b) => b - a);
console.log(sortArray.join(""));