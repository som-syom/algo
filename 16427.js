const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const tc = input[1].split(" ").map(Number);

let max = 0;
for (let i = 0; i < n; i++) {
  if (max < tc[i]) max = tc[i];
}

console.log(Math.ceil((max * s) / 1000));
