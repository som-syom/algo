const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = input[0].split("");
let size = arr.length;
let stack = [];
let res = 0;
for (let i = 0; i < size; i += 1) {
  if (arr[i] === "(" && arr[i + 1] === ")") {
    res += stack.length;
    i += 1;
  } else if (arr[i] === "(") {
    stack.push("(");
  } else if (arr[i] === ")") {
    res += 1;
    stack.pop();
  }
}

console.log(res);
