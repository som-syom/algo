const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
let firemap = [...input].map((row) => row.split(""));
const visited = Array(R)
  .fill(false)
  .map(() => Array(C).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let start = []; // 시작점 [y, x]
let f = []; // 화재지점 [y, x]

const bfs = (y, x, fy, fx, cnt) => {
  const queue = [[y, x, cnt]];
  const fqueue = [[fy, fx]];
  visited[y][x] = true;

  while (queue.length && fqueue.length) {
    y = queue[0][0];
    x = queue[0][1];
    cnt = queue[0][2];
    fx = fqueue[0][1];
    fy = fqueue[0][0];
    firemap[fy][fx] = "F";
    queue.shift();
    fqueue.shift();

    if (y === R - 1 || x === C - 1 || y === 0 || x === 0) {
      return cnt + 1;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < C &&
        ny >= 0 &&
        ny < R &&
        !visited[ny][nx] &&
        input[ny][nx] === "." &&
        firemap[ny][nx] === "."
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx, cnt + 1]);
      }
    }
    for (let i = 0; i < 4; i++) {
      const nx = fx + dx[i];
      const ny = fy + dy[i];
      if (
        nx >= 0 &&
        nx < C &&
        ny >= 0 &&
        ny < R &&
        !visited[ny][nx] &&
        input[ny][nx] === "."
      ) {
        fqueue.push([ny, nx]);
      }
    }
  }
  return "IMPOSSIBLE";
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (input[i][j] === "J") {
      start.push(j);
      start.push(i);
    }
    if (input[i][j] === "F") {
      f.push(j);
      f.push(i);
    }
    if (start.length && f.length) break;
  }
}

const res = bfs(start[1], start[0], f[1], f[0], 0);
console.log(res);
