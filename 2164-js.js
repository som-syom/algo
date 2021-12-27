const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let N = +input[0];

const arr = [];
for (let i = 1; i <= N; i += 1) {
  arr.push(i);
}

if (N === 1) console.log(1);
else {
  for (let i = 1; i <= 2 * N - 3; i += 1) {
    if (i % 2 === 1) {
      arr[i - 1] = 0;
    } else {
      arr[N] = i;
      N = N + 1;
    }
  }

  console.log(arr[N - 1]);
}
