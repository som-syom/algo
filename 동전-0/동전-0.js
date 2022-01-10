const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ");
K = +K;
const arr = [];
let res = 0;

for (let i = 1; i <= +N; i++) arr.push(+input[i]);

for (let i = +N - 1; i >= 0; i--) {
  res += Math.floor(K / arr[i]);
  K %= arr[i];
}

console.log(res);
