const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const W = +input.shift();
const N = +input.shift();

let sum = 0;

for (let i = 0; i < N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  sum += x * y;
}

console.log(Math.floor(sum / W));
