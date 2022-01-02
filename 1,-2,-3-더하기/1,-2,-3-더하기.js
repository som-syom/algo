const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];
let res = "";

for (let i = 1; i <= T; i += 1) {
  const N = +input[i];
  const arr = [];
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;

  for (let i = 4; i <= N; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }

  res += arr[N] + "\n";
}
console.log(res);
