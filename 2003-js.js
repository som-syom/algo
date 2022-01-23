const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");
const arr = input[1].split(" ");

let start = 0;
let end = 0;
let cnt = 0;

let summ = +arr[start];
while (start < +N) {
  while (end < +N && summ < +M) {
    end++;
    summ += +arr[end];
  }
  if (summ === +M) {
    cnt++;
  }
  summ -= +arr[start];
  start++;
}

console.log(cnt);
