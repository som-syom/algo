const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

const arr = [];
arr[1] = 0;

for (let i = 2; i <= N; i += 1) {
  arr[i] = arr[i - 1] + 1;
  if (i % 2 === 0) arr[i] = Math.min(arr[i], arr[Math.floor(i / 2)] + 1);
  if (i % 3 === 0) arr[i] = Math.min(arr[i], arr[Math.floor(i / 3)] + 1);
}

console.log(arr[N]);
