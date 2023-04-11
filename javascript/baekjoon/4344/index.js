const fs = require("fs");
const input = fs.readFileSync("./baekjoon/4344/std.txt").toString().split("\n");

const c = Number(input[0]);

for(let i = 1; i <= c; i++) {
    let sum = 0;
    let count = 0;
    
    const array = input[i].split(" ").map((str) => Number(str));
    const length = array[0];
    
    for(let chk = 1; chk <= length; chk++) {
        sum += array[chk];
    }
    
    const sumAvg = sum / length;
    for(let avg = 1; avg <= length; avg++) {
        if(array[avg] > sumAvg) {
            count++;
        }
    }
    
    console.log(`${((count / length) * 100).toFixed(3)}%`);
}