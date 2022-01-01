const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < 5; i += 1) {
  input[i] = input[i].split("");
}

let cnt = 0;
let res = 0;
let tmp = "";
const rec = (x, y, cnt) => {
  if (cnt === 7) {
    res += 1;
    console.log(tmp);
    return;
  }
  if (input[y][x] === "S") {
    if (x !== 4 && (input[y][x + 1] === "Y" || input[y][x + 1] === "S")) {
      cnt += 1;
      tmp += input[y][x];
      rec(x + 1, y, cnt);
    }
    if (y !== 4 && (input[y + 1][x] === "Y" || input[y + 1][x] === "S")) {
      cnt += 1;
      tmp += input[y][x];
      rec(x, y + 1, cnt);
    }
  } else if (input[y][x] === "Y") {
    if (x !== 4 && input[y][x + 1] === "S") {
      cnt += 1;
      tmp += input[y][x];
      rec(x + 1, y, cnt);
    }
    if (y !== 4 && input[y + 1][x] === "S") {
      cnt += 1;
      tmp += input[y][x];
      rec(x, y + 1, cnt);
    }
  }
};

rec(0, 0, cnt);

console.log(res);
