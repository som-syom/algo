const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

let res = "";
const rec = (y, x, n) => {
  if (Math.floor(y / n) % 3 === 1 && Math.floor(x / n) % 3 === 1) {
    res += " ";
  } else {
    if (Math.floor(n / 3) === 0) {
      res += "*";
    } else {
      rec(y, x, Math.floor(n / 3));
    }
  }
};

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    rec(i, j, n);
  }
  res += "\n";
}

console.log(res);
