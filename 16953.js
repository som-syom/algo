const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [first, second] = input[0].split(" ").map(Number);
const visited = [];

const bfs = (first) => {
  const queue = [first];
  const cqueue = [1];
  visited[first] = true;

  while (queue.length) {
    const cur = queue.shift();
    const ccur = cqueue.shift();

    if (cur === second) {
      return ccur;
    }

    const next = cur * 2;
    if (next <= second) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        cqueue.push(ccur + 1);
      }
    }
    const next2 = cur * 10 + 1;
    if (next2 <= second) {
      if (!visited[next2]) {
        visited[next2] = true;
        queue.push(next2);
        cqueue.push(ccur + 1);
      }
    }
  }
  return -1;
};

let res = bfs(first);
console.log(res);
