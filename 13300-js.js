const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ");
const arr = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

for (let i = 1; i <= +N; i++) {
  const [first, second] = input[i].split(" ");
  arr[+second][+first]++;
}

let res = 0;
arr.map((n) => {
  if (n[0] !== 0) res += Math.ceil(n[0] / K);
  if (n[1] !== 0) res += Math.ceil(n[1] / K);
});

console.log(res);
