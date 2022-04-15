const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
let arr = [0, 0, 0];

for (let i = 0; i < N; i++) {
  const [first, second, third] = input[i].split(" ");
  arr[0] += +first;
  arr[1] += +second;
  arr[2] += +third;

  let min = 1e9;
  for (let j = 0; j < 3; j++) {
    min = Math.min(min, arr[j]);
  }
  if (min >= 30) {
    console.log(min);
    arr = arr.map((v) => v - min);
  } else {
    console.log("NO");
  }
}
