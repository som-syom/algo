const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ");

const map = [];
map[0] = [];
for (let i = 0; i <= +m; i += 1) {
  map[0][i] = 0;
}
for (let i = 1; i <= +n; i += 1) {
  map[i] = input[i].split("");
  map[i].unshift(0);
  for (let j = 1; j <= +m; j += 1) {
    map[i][j] = +map[i][j];
  }
}

let max = 0;
for (let i = 1; i <= +n; i += 1) {
  for (let j = 1; j <= +m; j += 1) {
    if (map[i][j] === 1) max = Math.max(1, max);
    if (
      map[i][j] !== 0 &&
      map[i - 1][j] !== 0 &&
      map[i][j - 1] !== 0 &&
      map[i - 1][j - 1] !== 0
    ) {
      map[i][j] = Math.min(map[i - 1][j], map[i][j - 1], map[i - 1][j - 1]) + 1;
      max = Math.max(max, map[i][j]);
    }
  }
}

console.log(max * max);
