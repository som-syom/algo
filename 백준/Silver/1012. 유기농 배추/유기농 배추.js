const { BADFLAGS } = require("dns");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];
let w;
let h;
let visited = [];
let arr = [];

const bfs = (y, x) => {
  const qx = [];
  const qy = [];

  qx.push(x);
  qy.push(y);

  while (qx.length && qy.length) {
    x = qx[0];
    qx.shift();
    y = qy[0];
    qy.shift();
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    for (let idx = 0; idx < 4; idx += 1) {
      const nx = x + dx[idx];
      const ny = y + dy[idx];
      if (
        nx >= 0 &&
        nx < w &&
        ny >= 0 &&
        ny < h &&
        arr[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        qx.push(nx);
        qy.push(ny);
      }
    }
  }
};

let res = "";
let next_idx = 1;
for (let i = 0; i < T; i += 1) {
  arr = [];
  visited = [];
  // console.log("n : ", next_idx);
  const [M, N, K] = input[next_idx].split(" ");
  w = +M;
  h = +N;
  next_idx += 1;

  // 배열생성
  for (let y = 0; y < +N; y += 1) {
    arr[y] = [].fill(0, 0, +M);
    visited[y] = [].fill(false, 0, +M);
  }
  // console.log(arr);

  // 배열 채우기
  const size = next_idx + +K;
  for (; next_idx < size; next_idx += 1) {
    const [xx, yy] = input[next_idx].split(" ");
    arr[+yy][+xx] = 1;
  }
  // console.log(arr);

  let cnt = 0;
  // bfs
  for (let y = 0; y < +N; y += 1) {
    for (let x = 0; x < +M; x += 1) {
      if (arr[y][x] === 1 && !visited[y][x]) {
        bfs(y, x);
        cnt += 1;
      }
    }
  }

  res += cnt + "\n";
}

console.log(res);
