const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const K = +input[0];
let arr = [];
for (let i = 1; i <= K; i += 1) {
  const num = +input[i];
  if (num === 0) {
    if (arr.length) arr.pop();
  } else {
    arr.push(num);
  }
}

let res = 0;
arr.map((n) => (res += n));
console.log(res);
