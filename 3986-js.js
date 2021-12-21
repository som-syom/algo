const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let res = 0;
for (let i = 1; i <= +input[0]; i += 1) {
  const stack = [];
  input[i].split("").map((alp) => {
    if (stack.length === 0) stack.push(alp);
    else if (stack[stack.length - 1] === alp) stack.pop();
    else stack.push(alp);
  });
  if (stack.length === 0) res += 1;
}

console.log(res);
