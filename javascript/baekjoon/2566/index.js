const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2566/std.txt").toString().split("\n");
const TDArray = input.map((inData) => inData.split(" "))

let maxNum = 0;
let maxPosition = {x: 0, y: 0};

for(let x = 0; x < TDArray.length; x++) {
    for(let y = 0; y < TDArray[x].length; y++) {
        if(TDArray[x][y] > maxNum) {
            maxNum = TDArray[x][y];
            maxPosition = {x, y};
            break;
        } else continue;
    }
}

console.log(maxNum);
console.log(`${maxPosition.x + 1} ${maxPosition.y + 1}`);