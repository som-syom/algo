const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let res = "";
while (1) {
  const [first, second] = input.shift().split(" ").map(Number);
  if (first === 0 && second === 0) {
    break;
  }

  if (first + second === 13) {
    res += "Never speak again.\n";
  } else if (first < second) {
    res += "Left beehind.\n";
  } else if (first === second) {
    res += "Undecided.\n";
  } else {
    res += "To the convention.\n";
  }
}
console.log(res);
