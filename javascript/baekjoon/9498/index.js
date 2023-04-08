const fs = require('fs');
const input = fs.readFileSync('./baekjoon/9498/std.txt').toString().split('\n');

const [hour, minute] = input[0].split(" ");

function setAlarm(hour, minute) {
    let setHour = hour;
    let setMinute = minute;
    
    if(setMinute < 45) {
        setHour -= 1;
        setMinute += 15;
        if(setHour < 0) setHour = 23;
    } else setMinute -= 45;
    
    console.log(setHour + " " + setMinute);
}

setAlarm(parseInt(hour), parseInt(minute));