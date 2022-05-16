const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
const dp = [input[i].split("").map(Number)];

for (let i = 1; i < N; i++) {
  dp.push([]);
  const nthHouse = input[i].split(" ").map(Number);
  for (let j = 0; j < 3; j++) {}
}
