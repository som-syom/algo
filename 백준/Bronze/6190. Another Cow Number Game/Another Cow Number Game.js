const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = +input[0];
let score = 0;
while (n !== 1) {
  if (n % 2 === 1) {
    n = n * 3 + 1;
  } else {
    n = n / 2;
  }
  score++;
}

console.log(score);
