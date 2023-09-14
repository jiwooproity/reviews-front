const fs = require("fs");
const input = fs.readFileSync("./std.txt").toString().trim().split("\n").map((i) => i.split(" "));
input.shift();

const result = [];
const companyMap = new Map(input.map((item) => [item[0], item[1]]));

for(let key of companyMap.keys()) {
    if(companyMap.get(key) !== 'leave') {
        result.push(key);
    }
}

console.log(result.sort().reverse());