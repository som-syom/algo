const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, C, S] = input[0].split(" ").map(Number);
const x = input[1].split(" ").map(Number);

let cur = 1;
let cnt = 0;
if (cur === S) {
  cnt++;
}
for (let i = 0; i < C; i++) {
  cur = (cur + x[i]) % N === 0 ? N : (cur + x[i]) % N;
  if (cur === S) {
    cnt++;
  }
}

console.log(cnt);
