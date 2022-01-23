const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(+input[i]);
}

arr.sort((a, b) => a - b);

let res = 0;
for (let i = 1; i <= N; i++) {
  res = Math.max(res, arr[N - i] * i);
}

console.log(res);
