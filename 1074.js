const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, r, c] = input.shift().split(" ").map(Number);

const move = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

let cur = 0;

const recursionZ = (size, x, y) => {
  if (size === 2) {
    for (let i = 0; i < 4; i++) {
      let cx = x + move[i][0];
      let cy = y + move[i][1];
      if (cx === r && cy === c) {
        console.log(cur);
        return;
      }
      cur++;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      let halfSize = Math.floor(size / 2);
      let cx = x + move[i][0] * halfSize;
      let cy = y + move[i][1] * halfSize;
      if (r >= cx && r < cx + halfSize && c >= cy && c < cy + halfSize) {
        recursionZ(halfSize, cx, cy);
      } else {
        cur += halfSize * halfSize;
      }
    }
  }
};

recursionZ(2 ** N, 0, 0);
