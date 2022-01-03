const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

input.shift();

input.sort((a, b) => +a - +b);
input.map((num) => console.log(num));
