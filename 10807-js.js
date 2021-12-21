const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = input[2];
let res = 0;
input[1].split(" ").map((n) => {
  if (n === num) res++;
});

console.log(res);
