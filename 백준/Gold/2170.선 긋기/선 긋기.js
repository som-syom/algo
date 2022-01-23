const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = [];

class pair {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
}

for (let i = 1; i <= N; i++) {
  const [first, second] = input[i].split(" ");
  if (+first < +second) arr[i - 1] = new pair(+first, +second);
  else arr[i - 1] = new pair(+second, +first);
}

arr.sort((a, b) => {
  if (a.first == b.first) return b.second - a.second;
  return a.first - b.first;
});

// console.log(arr);

let res = [0];
let idx = 0;
let cur = arr[0].first;
for (let i = 0; i < N; i++) {
  if (cur > arr[i].second) continue;
  else if (cur >= arr[i].first) {
    res[idx] += arr[i].second - cur;
    cur = arr[i].second;
  } else {
    res.push(arr[i].second - arr[i].first);
    idx++;
    cur = arr[i].second;
  }
}
// console.log(res);

let size = res.length;
let ans = 0;
for (let i = 0; i < size; i++) {
  ans += res[i];
}

console.log(ans);
