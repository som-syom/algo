const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const cur = +input.shift();
const next = +input.shift();
let sub = next - cur;
let minus = 1;

if (sub < 0) {
  sub = -sub;
  minus = -1;
}

if (sub > 180) {
  sub = 360 - sub;
  minus = -minus;
}

console.log(sub * minus === -180 ? 180 : sub * minus);
