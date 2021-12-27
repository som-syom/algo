const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

const queue = [];
let res = "";
for (let i = 1; i <= N; i += 1) {
  const str = input[i].split(" ");

  if (str[0] === "push") {
    queue.push(str[1]);
  } else if (str[0] === "pop") {
    if (queue.length === 0) res += "-1\n";
    else res += queue.shift() + "\n";
  } else if (str[0] === "size") {
    res += queue.length + "\n";
  } else if (str[0] === "empty") {
    if (queue.length === 0) res += "1\n";
    else res += "0\n";
  } else if (str[0] === "back") {
    if (queue.length === 0) res += "-1\n";
    else res += queue[queue.length - 1] + "\n";
  } else if (str[0] === "front") {
    if (queue.length === 0) res += "-1\n";
    else res += queue[0] + "\n";
  }
}

console.log(res);
