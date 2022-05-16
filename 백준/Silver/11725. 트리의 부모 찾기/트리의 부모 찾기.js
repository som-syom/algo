const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
const tree = [];
for (let i = 0; i < N + 1; i++) {
  tree.push([]);
}

for (let i = 0; i < N - 1; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  tree[first].push(second);
  tree[second].push(first);
}

let res = [];
const visited = Array(N + 1).fill(0);
visited[1] = 1;
tree[1].forEach((node) => {
  res[node] = 1;
  visited[node] = 1;
});

const bfs = () => {
  const queue = [];
  visited[1] = 1;
  tree[1].forEach((node) => {
    res[node] = 1;
    visited[node] = 1;
    queue.push(node);
  });

  while (queue.length) {
    const node = queue.shift();
    tree[node].forEach((child) => {
      if (!visited[child]) {
        visited[child] = 1;
        res[child] = node;
        queue.push(child);
      }
    });
  }
};

bfs();
res = res.slice(2);

console.log(res.join("\n"));
