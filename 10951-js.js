let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let num = input[i].split(" ");
  console.log(+num[0] + +num[1]);
}
