const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [h, w] = input.shift().split(" ").map(Number);

let origin = [];
const next = [];
for (let i = 0; i < h * 2; i++) {
  if (i < h) origin.push(input[i].split("").map(Number));
  else next.push(input[i].split("").map(Number));
}

let cnt = 0;

const flip = (y, x) => {
  for (let i = y; i < y + 3; i++) {
    for (let j = x; j < x + 3; j++) {
      origin[i][j] = 1 - origin[i][j];
    }
  }
};

const check = (h, w) => {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (origin[i][j] !== next[i][j]) {
        return -1;
      }
    }
  }
  return 0;
};

if (h < 3 || w < 3) {
  console.log(check(h, w));
} else {
  // 바꾸기
  const solution = (h, w) => {
    for (let i = 0; i < h - 2; i++) {
      for (let j = 0; j < w - 2; j++) {
        if (origin[i][j] !== next[i][j]) {
          flip(i, j);
          cnt++;
        }
      }
    }

    // 검증
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (origin[i][j] !== next[i][j]) {
          return -1;
        }
      }
    }
    return cnt;
  };

  console.log(solution(h, w));
}
