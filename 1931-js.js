const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

class pair {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
}

const arr = [];
for (let i = 1; i <= N; i++) {
  const [f, s] = input[i].split(" ");
  arr[i - 1] = new pair(+f, +s);
}

// 끝나는 시간으로 정렬
arr.sort((a, b) => {
  if (a.second === b.second) return a.first - b.first;
  return a.second - b.second;
});

console.log(arr);

let res = 0;
let t = 0;
for (let i = 0; i < N; i++) {
  if (t > arr[i].first) continue;
  res += 1;
  t = arr[i].second;
}

console.log(res);
