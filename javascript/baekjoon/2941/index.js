const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2941/std.txt").toString().split("\n");

const string = input[0];
const alphabetList = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;

for(let i = 0; i < alphabetList.length; i++) {
    if(string.includes(alphabetList[i])) {
        count++;
    }
}