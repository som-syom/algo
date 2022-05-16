const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let caseNumber = 1;
let idx = 0;
let res = "";
while (1) {
  const [n, m] = input[idx++].split(" ").map(Number);
  if (n === 0 && m === 0) {
    break;
  }

  // 빈 트리 배열 만들기
  const tree = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  // 노드 연결
  for (let i = 0; i < m; i++) {
    const [first, second] = input[idx++].split(" ").map(Number);
    tree[first][second] = 1;
    tree[second][first] = 1;
  }

  const visited = Array(n + 1).fill(0);
  let count = 0;

  const bfs = (node) => {
    visited[node] = 1;
    let queue = [node];

    while (queue.length) {
      let cur = queue.shift();

      for (let i = 1; i <= n; i++) {
        if (tree[cur][i] === 1) {
          if (!visited[i]) {
            visited[i] = 1;
            queue.push(i);
            tree[i][cur] = 0;
            tree[cur][i] = 0;
          } else return false;
        }
      }
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (bfs(i)) count++;
    }
  }

  if (count === 0) {
    res += `Case ${caseNumber}: No trees.\n`;
  } else if (count === 1) {
    res += `Case ${caseNumber}: There is one tree.\n`;
  } else {
    res += `Case ${caseNumber}: A forest of ${count} trees.\n`;
  }

  caseNumber++;
}

console.log(res);
