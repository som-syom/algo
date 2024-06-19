const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, () => 0);

for (let i = 0; i < M; i++) {
  const [from, to, num] = input[i + 1].split(" ").map(Number);
  for (let j = from - 1; j < to; j++) {
    arr[j] = num;
  }
}

console.log(arr.join(" "));
