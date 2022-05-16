const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = [...input].map((row) => row.split(" "));
const visited = Array(n)
  .fill(0)
  .map(() => Array(m).fill(0));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (y, x) => {
  const queue = [[y, x]];
  visited[y][x] = 1;
  let cnt = 0;

  while (queue.length) {
    y = queue[0][0];
    x = queue[0][1];
    queue.shift();
    cnt++;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        !visited[ny][nx] &&
        map[ny][nx] === "1"
      ) {
        visited[ny][nx] = 1;
        queue.push([ny, nx]);
      }
    }
  }
  return cnt;
};

let count = 0;
let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "1" && !visited[i][j]) {
      max = Math.max(max, bfs(i, j));
      count++;
    }
  }
}
console.log(count);
console.log(max);
