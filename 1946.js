const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let T = +input.shift();
let res = "";
let idx = 0;
while (T--) {
  const N = +input[idx];
  let arr = [];
  idx++;
  for (let j = 0; j < N; j++, idx++) {
    const line = input[idx].split(" ").map(Number);
    arr.push(line);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let cnt = 1;
  let tmp = arr[0][1];
  for (let j = 1; j < N; j++) {
    if (arr[j][1] < tmp) {
      tmp = arr[j][1];
      cnt++;
    }
  }
  res += cnt + "\n";
}

console.log(res);
