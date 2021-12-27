const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const nums = input[1].split(" ");
const stack = [];
const nstack = [];
let res = "";
for (let i = 0; i < N; i += 1) {
  const num = +nums[i];

  if (i === 0) {
    stack.push(num);
    nstack.push(i + 1);
    res += "0 ";
  } else {
    let slen = stack.length - 1;

    for (; slen >= 0; slen -= 1) {
      if (stack[slen] > num) {
        res += nstack[slen] + " ";
        stack.push(num);
        nstack.push(i + 1);
        break;
      } else if (stack[slen] < num) {
        stack.pop();
        nstack.pop();
      }
    }

    if (stack.length === 0) {
      stack.push(num);
      nstack.push(i + 1);
      res += "0 ";
    }
  }
  // console.log("i : ", i, stack, res);
}

console.log(res);
