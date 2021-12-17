const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = +input[0]; i > 0; i--) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}
