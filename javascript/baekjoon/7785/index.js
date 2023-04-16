const fs = require("fs");
const input = fs.readFileSync("./baekjoon/7785/std.txt").toString().trim().split("\n");

const N = Number(input.shift());
const commuteManage = new Set();

for(let i = 0; i < N; i++) {
    const member = input[i].split(" ");
    
    if(member[1] === "enter") {
        commuteManage.add(member[0]);
    } else if(member[1] === "leave") {
        commuteManage.delete(member[0]);
    }
}

const sorting = Array.from(commuteManage).sort();
console.log(sorting.join("\n"));