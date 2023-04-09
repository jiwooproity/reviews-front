const fs = require("fs");
const input = fs.readFileSync("./baekjoon/2525/std.txt").toString().split("\n");

const data = input[0].split(" ");
const [hour, minute]  = data;
const setTime = input[1];

function setTimer(hour, minute, setTime) {
    let newHour = hour;
    let newMinute = minute;

    newMinute += setTime;

    let setHour = parseInt(newMinute / 60);
    newHour += setHour;
    newMinute = newMinute % 60;

    console.log(newHour > 23 ? newHour - 24 : newHour, newMinute);
}

setTimer(parseInt(hour), parseInt(minute), parseInt(setTime));