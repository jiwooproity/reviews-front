const fs = require('fs');
const [string] = fs.readFileSync('./std.txt').toString().split("\n");
console.log(string.charCodeAt());