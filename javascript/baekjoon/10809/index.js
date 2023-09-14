const fs = require('fs');
const [string] = fs.readFileSync('./std.txt').toString().split('\n');

let startChar = 97;
let endChar = 122;

let answer = '';

for(let i = startChar; i <= endChar; i++) {
    answer += `${string.indexOf(String.fromCharCode(i))} `;
}

console.log(answer);