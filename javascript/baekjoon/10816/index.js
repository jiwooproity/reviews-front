const fs = require("fs");
const input = fs.readFileSync("./baekjoon/10816/std.txt").toString().trim().split("\n");

const cards = input[1].split(" ");
const M = Number(input[2]);
const hasCards = input[3].split(" ");

const map = new Map();

cards.forEach((card) => map.has(card) ? map.set(card, map.get(card) + 1) : map.set(card, 1));

let answer = "";
hasCards.forEach((card) => map.has(card) ? answer += map.get(card) + " " : answer += "0 ");

console.log(answer);