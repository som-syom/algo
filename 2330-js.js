const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");

const arr = [];
for (let i = 1; i <= +N; i++) {
  arr.push(+input[i]);
}
arr.sort((a, b) => a - b);
let start = 0;
let end = 0;
let min = 0x7fffffff;
while (start !== +N && end !== +N) {
  if (arr[end] - arr[start] < +M) {
    end++;
  } else {
    min = Math.min(min, arr[end] - arr[start]);
    start++;
  }
}

console.log(min);
