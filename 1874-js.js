const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

const stack = [];
let current = 1;
let res = "";
for (let i = 1; i <= N; i += 1) {
  const num = +input[i];

  while (current <= N + 1) {
    if (stack.length && stack[stack.length - 1] === num) {
      stack.pop();
      res += "-\n";
      break;
    } else {
      stack.push(current);
      res += "+\n";
      current += 1;
    }
  }
}
if (stack.length !== 0) res = "NO";

// console.log(stack);
console.log(res);
