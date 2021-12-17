let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

input.map((str) => {
  return console.log(str);
});
