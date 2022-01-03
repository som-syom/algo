const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");

const arr = [];
const visited = [];
let res = 0;

// bfs
const bfs = (y, x, cnt) => {
  const qx = [];
  const qy = [];
  const qcnt = [];

  qx.push(x);
  qy.push(y);
  qcnt.push(cnt);

  while (qx.length && qy.length) {
    x = qx[0];
    qx.shift();
    y = qy[0];
    qy.shift();
    count = qcnt[0];
    qcnt.shift();
    if (x === M - 1 && y === N - 1) {
      res = qcnt;
      return;
    }

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
        arr[ny][nx] === "0" &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        qx.push(nx);
        qy.push(ny);
        qcnt.push(count + 1);
      }
    }
  }
};

// 배열 옮기기
for (let i = 0; i < +N; i += 1) {
  arr[i] = input[i + 1].split("");
  visited[i].fill(false, 0, +M);
}

bfs(0, 0, 1);

console.log(arr);
