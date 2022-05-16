const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
let sum = 0;
for (let i = 0; i < N; i++) {
  let max = 0;
  const line = input[i].split(" ");
  for (let j = 0; j < N; j++) {
    max = Math.max(max, +line[j]);
  }
  sum += max;
}
console.log(sum);
