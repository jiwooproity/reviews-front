const fs = require("fs");
const input = fs.readFileSync("./baekjoon/1157/std.txt").toString().toLowerCase().split("\n");
const char = [...input[0]];

let alphabet = {};

for(let chk = 0; chk < char.length; chk++) {
    alphabet = {
        ...alphabet,
        [char[chk]]: alphabet[char[chk]] ? alphabet[char[chk]] + 1 : 1,
    }
}

let answer = "";
let length = 0;

for(let key in alphabet) {
    if(alphabet[key] > length) {
        answer = key;
        length = alphabet[key];
    }
    else if(alphabet[key] === length) {
        answer = "?";
    }
}

console.log(answer.toUpperCase());