const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const isused1 = [].fill(false, 0, N); // y
const isused2 = [].fill(false, 0, N + N - 1); // x + y
const isused3 = [].fill(false, 0, N + N - 1); // x - y + n - 1
let res = 0;
const rec = (cur) => {
  if (cur === N) {
    res += 1;
    return;
  }
  for (let i = 0; i < N; i += 1) {
    if (!isused1[i] && !isused2[cur + i] && !isused3[cur - i + N - 1]) {
      isused1[i] = true;
      isused2[cur + i] = true;
      isused3[cur - i + N - 1] = true;
      rec(cur + 1);
      isused1[i] = false;
      isused2[cur + i] = false;
      isused3[cur - i + N - 1] = false;
    }
  }
};

rec(0);

console.log(res);
