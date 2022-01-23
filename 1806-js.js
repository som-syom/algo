const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");
const arr = input[1].split(" ");

let start = 0;
let end = 0;
let min = 0x7fffffff;
let res = 0;

let summ = +arr[start];
while (start < +N) {
  while (end < +N && summ < +M) {
    end++;
    summ += +arr[end];
  }
  if (summ >= +M) {
    min = Math.min(min, end - start + 1);
    res = min;
    if (res === 1) break;
  }
  summ -= arr[start];
  start++;
}

console.log(res);
