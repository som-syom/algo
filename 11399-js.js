const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = input[1].split(" ");

arr.sort((a, b) => +a - +b);

let res = 0;
for (let i = 0; i < N; i++) {
  let tmp = 0;
  for (let j = i; j >= 0; j--) {
    tmp += +arr[j];
  }
  res += tmp;
}

console.log(res);
