const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let sum = 0;
for (let i = 1; i <= +input[0]; i++) {
  sum += i;
}

console.log(sum);
