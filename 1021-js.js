const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const queue = [];

const left = () => {
  if (queue.length === 0) return;
  queue.push(queue[0]);
  queue.shift();
};

const num1 = input[0].split(" ");
const num2 = input[1].split(" ");
for (let i = 1; i <= +num1[0]; i += 1) {
  queue.push(i);
}
let res = 0;
for (let i = 0; i < +num1[1]; i += 1) {
  let cnt = 0;
  while (1) {
    if (queue[0] === +num2[i]) break;
    cnt++;
    left();
  }
  if (cnt > queue.length / 2) cnt = queue.length - cnt;
  res += cnt;
  queue.shift();
}

console.log(res);
