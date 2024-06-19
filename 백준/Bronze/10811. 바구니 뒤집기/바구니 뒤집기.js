const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map((e) => parseInt(e));
const arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 0; i < m; i++) {
  const [from, to] = input[i + 1].split(" ").map((e) => parseInt(e));
  const temp = arr.slice(from - 1, to).reverse();
  let idx = 0;
  for (let j = from - 1; j < to; j++) {
    arr[j] = temp[idx++];
  }
}

console.log(arr.join(" "));
