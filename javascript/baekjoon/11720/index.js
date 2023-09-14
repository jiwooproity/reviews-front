const fs = require('fs');
const [num, chars] = fs.readFileSync('./std.txt').toString().split('\n');

let answer = 0;
for(let i = 0; i < num; i++) {
    answer += +chars[i];
}

console.log(answer);