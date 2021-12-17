const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let j = 1;
for (let i = +input[0]; i > 0; i--) {
  let str = "";
  for (let k = i - 1; k > 0; k--) {
    str += " ";
  }
  for (let l = 1; l <= j; l++) {
    if (l % 2 === 1) str += "*";
    else str += " ";
  }
  console.log(str);
  j += 2;
}
