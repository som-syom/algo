const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

const stack = [];
let res = "";
for (let i = 1; i <= N; i += 1) {
  const str = input[i].split(" ");

  if (str[0] === "push") {
    stack.push(str[1]);
  } else if (str[0] === "pop") {
    if (stack.length === 0) res += "-1\n";
    else res += stack.pop() + "\n";
  } else if (str[0] === "size") {
    res += stack.length + "\n";
  } else if (str[0] === "empty") {
    if (stack.length === 0) res += "1\n";
    else res += "0\n";
  } else if (str[0] === "top") {
    if (stack.length === 0) res += "-1\n";
    else res += stack[stack.length - 1] + "\n";
  }
}

console.log(res);
