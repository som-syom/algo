const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, c] = input.shift().split(" ").map(Number);

const tree = [];
for (let i = 0; i < N + 1; i++) {
  tree.push([]);
}

// 노드, 거리 추가
for (let i = 0; i < N - 1; i++) {
  const [x, y, distance] = input.shift().split(" ").map(Number);
  tree[x].push([y, distance]);
  tree[y].push([x, distance]);
}

let res = "";

for (let i = 0; i < c; i++) {
  const [x, y] = input.shift().split(" ").map(Number);
  const visited = Array(N + 1).fill(0);
  visited[x] = 1;
  const queue = [[x, 0]];

  while (queue.length) {
    const [node, distance] = queue.shift();
    if (node === y) {
      res += distance + "\n";
      break;
    }

    tree[node].forEach(([child, childDistance]) => {
      if (!visited[child]) {
        visited[child] = 1;
        queue.push([child, distance + childDistance]);
      }
    });
  }
}

console.log(res);
