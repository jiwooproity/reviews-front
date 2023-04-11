const fs = require("fs");
const input = fs.readFileSync("./baekjoon/25206/std2.txt").toString().trim().split("\n").map((str) => str.split(" "));

const score = {
    "A+": 4.5, "A0": 4.0,
    "B+": 3.5, "B0": 3.0,
    "C+": 2.5, "C0": 2.0,
    "D+": 1.5, "D0": 1.0,
    "F": 0.0,
};

let titleScore = 0;
let courseScore = 0;

for(let [title, gradeScore, alphabetScore] of input) {
    if(alphabetScore === "P") continue;
    titleScore += score[alphabetScore] * gradeScore;
    courseScore += gradeScore * 1;
};

console.log(titleScore / courseScore);