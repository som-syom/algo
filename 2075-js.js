const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = [];

for (let i = N - 2; i <= N; i++) {
  const nums = input[i].split(" ").sort((a, b) => +a - +b);
  for (let i = 0; i < N; i++) {
    arr.push(nums[i]);
  }
}

arr.sort((a, b) => +b - +a);

console.log(arr[N - 1]);
// 메모리초과 -> 자바스크립트로는 어려운듯...
