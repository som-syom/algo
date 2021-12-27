const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ");

const arr = [];
for (let i = 1; i <= +N; i += 1) {
  arr.push(i);
}

let res = [];
while (arr.length) {
  for (let i = 0; i < +K - 1; i += 1) {
    arr.push(arr.shift());
  }
  res.push(arr.shift());
}

console.log("<" + res.join(", ") + ">");
