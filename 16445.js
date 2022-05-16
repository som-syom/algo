const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
let cnt = 0;
for (let i = 0; i < N; i++) {
  if (input[i] === "1") {
    cnt++;
  }
}

console.log(N - cnt);
