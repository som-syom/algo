const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const stair = [];
stair[0] = 0;
const sum = [];
sum[0] = [, 0, 0];

for (let i = 1; i <= N; i += 1) {
  stair[i] = +input[i];
  sum[i] = [];
}

sum[1][1] = stair[1];
sum[1][2] = 0;

for (let i = 2; i <= N; i += 1) {
  sum[i][1] = Math.max(sum[i - 2][1], sum[i - 2][2]) + stair[i];
  sum[i][2] = sum[i - 1][1] + stair[i];
}

console.log(Math.max(sum[N][1], sum[N][2]));
