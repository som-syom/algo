const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const str = input[0];
const stack = [];
let x = 1;
let res = 0;
for (let i = 0; i < str.length; i += 1) {
  if (str[i] === "(") {
    stack.push(str[i]);
    x *= 2;
  } else if (str[i] === "[") {
    stack.push(str[i]);
    x *= 3;
  } else if (str[i] === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      res = 0;
      break;
    } else if (str[i - 1] === "(") {
      stack.pop();
      res += x;
      x /= 2;
    } else {
      stack.pop();
      x /= 2;
    }
  } else if (str[i] === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      res = 0;
      break;
    } else if (str[i - 1] === "[") {
      stack.pop();
      res += x;
      x /= 3;
    } else {
      stack.pop();
      x /= 3;
    }
  }
}
if (stack.length !== 0) res = 0;

console.log(res);
