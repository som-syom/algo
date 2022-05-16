const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input.shift().split(" ");
const visited = Array(N).fill(0);

const bfs = (num, count) => {
  const queue = [num];
  const cq = [count];

  while (queue.length) {
    num = queue.shift();
    count = cq.shift();

    if (num === +K) {
      console.log(count);
      return;
    }

    if (num - 1 >= 0 && !visited[num - 1]) {
      queue.push(num - 1);
      cq.push(count + 1);
      visited[num - 1] = 1;
    }
    if (num + 1 <= 100000 && !visited[num + 1]) {
      queue.push(num + 1);
      cq.push(count + 1);
      visited[num + 1] = 1;
    }
    if (num * 2 <= 100000 && !visited[num * 2]) {
      queue.push(num * 2);
      cq.push(count + 1);
      visited[num * 2] = 1;
    }
  }
};

bfs(+N, 0);
