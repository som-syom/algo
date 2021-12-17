const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let d = [];
let res = "";

for (let i = 1; i <= +input[0]; i++) {
  let str = input[i].split(" ");
  if (str[0] === "push_front") {
    d.unshift(str[1]);
  } else if (str[0] === "push_back") {
    d.push(str[1]);
  } else if (str[0] === "pop_front") {
    if (d.length === 0) res += -1 + "\n";
    else {
      res += d[0] + "\n";
      d.shift();
    }
  } else if (str[0] === "pop_back") {
    if (d.length === 0) res += -1 + "\n";
    else {
      res += d[d.length - 1] + "\n";
      d.pop();
    }
  } else if (str[0] === "size") {
    res += d.length + "\n";
  } else if (str[0] === "empty") {
    if (d.length === 0) res += 1 + "\n";
    else res += 0 + "\n";
  } else if (str[0] === "front") {
    if (d.length === 0) res += -1 + "\n";
    else res += d[0] + "\n";
  } else if (str[0] === "back") {
    if (d.length === 0) res += -1 + "\n";
    else res += d[d.length - 1] + "\n";
  }
}
console.log(res);
