const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

let res = 0;
let str = "";
const rec = (a, b, n) => {
  if (n === 1) {
    res += 1;
    str += a + " " + b + "\n";
    return;
  }
  rec(a, 6 - a - b, n - 1);
  str += a + " " + b + "\n";
  res += 1;
  rec(6 - a - b, b, n - 1);
};

rec(1, 3, n);

console.log(res);
console.log(str);
