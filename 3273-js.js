const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(" ").sort((a, b) => a - b);
const len = +input[0];
const num = +input[2];
let res = 0;
const check = [];

for (let i = 0; i < len; i += 1) {
  if (num - +arr[i] > 0 && check[num - arr[i]] == 1) res++;
  check[+arr[i]] = 1;
}

console.log(res);
