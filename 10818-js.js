let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = -1000000;
let min = 1000000;

input[1].split(" ").map((num) => {
  if (num > +max) max = num;
  if (num < +min) min = num;
});

console.log(min, max);
