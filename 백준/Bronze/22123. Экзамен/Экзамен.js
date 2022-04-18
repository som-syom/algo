const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let N = +input.shift();

const calcTime = (first, second) => {
  let h = second[0] - first[0];
  let m = second[1] - first[1];
  let s = second[2] - first[2];

  if (h < 0) {
    h += 24;
  }
  if (m < 0) {
    m += 60;
    h--;
    if (h < 0) {
      h += 24;
    }
  }
  if (s < 0) {
    s += 60;
    m--;
    if (m < 0) {
      m += 60;
      h--;
      if (h < 0) {
        h += 24;
      }
    }
  }
  return h * 60 * 60 + m * 60 + s === 0 ? 24 * 3600 : h * 60 * 60 + m * 60 + s;
};

let res = "";
for (let i = 0; i < N; i++) {
  const [first, second, t] = input[i]
    .split(" ")
    .map((el) => el.split(":").map(Number));

  const time = calcTime(first, second);
  // console.log(time, t * 60);
  if (time >= t * 60) {
    res += "Perfect\n";
  } else if (time + 3600 >= t * 60) {
    res += "Test\n";
  } else {
    res += "Fail\n";
  }
}

console.log(res);
