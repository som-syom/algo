const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, w, L] = input[0].split(" ").map(Number);
const arr = [];
const nums = input[1].split(" ").map(Number);
let sum = 0;
let cur = 0;

while (nums.length !== 0) {
  if (arr.length >= w) {
    cur -= arr.shift();
  }
  if (cur + nums[0] <= L) {
    const num = nums.shift();
    arr.push(num);
    cur += num;
  } else {
    arr.push(0);
  }
  sum++;
}

sum += w;

console.log(sum);
