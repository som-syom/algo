const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (_, index) => index + 1);

for (let i = 0; i < M; i++) {
  const [num1, num2] = input[i + 1].split(" ").map(Number);
  const temp = arr[num1 - 1];
  arr[num1 - 1] = arr[num2 - 1];
  arr[num2 - 1] = temp;
}

console.log(arr.join(" "));
