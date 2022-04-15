const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input.shift();

let min = 0;
let cur = 0;
for (let i = 0; i < n; i++) {
  cur += +input[i];
  if (cur < min) {
    min = cur;
  }
}

if (min === 0) console.log(0);
else console.log(-min);
