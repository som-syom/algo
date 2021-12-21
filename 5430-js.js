const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let res = "";
for (let i = 1; i <= +input[0] * 3; i += 3) {
  const cmd = input[i];
  let arr = JSON.parse(input[i + 2]);
  let err_flag = false;
  let rev_flag = 1;
  const len = cmd.length;
  for (let j = 0; j < len; j++) {
    if (cmd[j] === "R") rev_flag *= -1;
    else if (cmd[j] === "D") {
      if (arr.length === 0) {
        res += "error" + "\n";
        err_flag = true;
        break;
      }
      if (rev_flag === 1) arr.shift();
      else if (rev_flag === -1) arr.pop();
    }
  }
  if (!err_flag) {
    if (rev_flag === -1) arr.reverse();
    res += "[" + arr + "]" + "\n";
  }
}

console.log(res);
