const fs = require("fs");
const text = fs.readFileSync('./fileSystem/codingTest.txt').toString().split('\n');
console.log(text);