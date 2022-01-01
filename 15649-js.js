const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");

const arr = [];
const isused = [];
isused.fill(false, 0, N);
let res = "";

const rec = (num) => {
  if (num === +M) {
    res += arr.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= +N; i += 1) {
    if (!isused[i]) {
      arr[num] = i;
      isused[i] = true;
      rec(num + 1);
      isused[i] = false;
    }
  }
};

rec(0);

console.log(res);
