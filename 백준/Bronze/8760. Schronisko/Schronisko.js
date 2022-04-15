const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
let res = "";

for (let i = 0; i < N; i++) {
  const [w, k] = input[i].split(" ").map(Number);
  res += Math.floor((w * k) / 2) + "\n";
}

console.log(res);
