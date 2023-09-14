const fs = require('fs');
const input = fs.readFileSync('./std.txt').toString().split('\n');

let answer = '';
const length = input.shift();

for(let i = 0; i < length; i++) {
    answer += `${input[i][0] + input[i][input[i].length - 1]}\n`
}

console.log(answer);