const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const str = input[0];
const index = +input[1];

console.log(str[index - 1]);
