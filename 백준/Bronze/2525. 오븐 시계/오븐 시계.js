const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const time = input[0].split(' ');
const plus = +input[1];

const mm = Number(time[1]) + plus;
const hh = (Number(time[0]) +  Math.floor(mm / 60)) % 24;

console.log(`${hh} ${mm % 60}`);