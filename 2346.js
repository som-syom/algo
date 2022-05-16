const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input.shift());
const nums = input
  .shift()
  .split(" ")
  .map((el, idx) => [+el, idx + 1]);
let cur = nums[0][0] > 0 ? nums[0][0] - 1 : nums[0][0] + 1;
let res = "" + 1;
nums.shift();

while (nums.length !== 0) {
  if (cur > 0) {
    for (let i = 0; i < cur; i++) nums.push(nums.shift());
  } else {
    for (let i = 0; i < -cur; i++) nums.unshift(nums.pop());
  }
  cur = nums[0][0];
  res += " " + nums[0][1];
  nums.shift();
}

console.log(res);
