const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
// knight
const dx = [2, 1, -1, -2, -2, -1, 1, 2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];
let res = "";

for (let i = 0; i < N; i++) {
  const l = +input.shift();
  const visited = Array(l)
    .fill(0)
    .map(() => Array(l).fill(0));
  const [y, x] = input.shift().split(" ").map(Number);
  const [ty, tx] = input.shift().split(" ").map(Number);

  const bfs = (y, x, cnt) => {
    const queue = [[y, x]];
    const cq = [cnt];
    visited[y][x] = 1;

    while (queue.length) {
      y = queue[0][0];
      x = queue[0][1];
      cnt = cq[0];
      queue.shift();
      cq.shift();

      if (y === ty && x === tx) {
        return cnt;
      }

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < l && ny >= 0 && ny < l && !visited[ny][nx]) {
          visited[ny][nx] = 1;
          queue.push([ny, nx]);
          cq.push(cnt + 1);
        }
      }
    }
  };

  res += bfs(y, x, 0) + "\n";
}

console.log(res);
