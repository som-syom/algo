const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = [];
let sum = 0;

for (let i = 1; i <= N; i++) {
  const num = +input[i];
  while (arr.length !== 0 && arr[arr.length - 1] <= num) {
    arr.pop();
  }
  arr.push(num);
  sum += arr.length - 1;
}

console.log(sum);
