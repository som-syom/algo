const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

const heap = [];
let size = 0;

const swap = (idx1, idx2) => {
  let tmp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = tmp;
};

const push = (x) => {
  if (size === 0) heap[1] = x;
  else {
    let pos = size + 1;
    heap[pos] = x;
    while (heap[pos] < heap[Math.floor(pos / 2)] && pos !== 1) {
      swap(pos, Math.floor(pos / 2));
      pos = Math.floor(pos / 2);
    }
  }
  size++;
};

const top = () => {
  if (size === 0) return 0;
  return heap[1];
};

const pop = () => {
  if (size === 0) return;
  let pos = 1;
  heap[pos] = heap[size];
  heap.pop();
  while (
    (heap[pos * 2] && heap[pos] > heap[pos * 2]) ||
    (heap[pos * 2 + 1] && heap[pos] > heap[pos * 2 + 1])
  ) {
    if (heap[pos * 2] > heap[pos * 2 + 1]) {
      swap(pos, pos * 2 + 1);
      pos = pos * 2 + 1;
    } else {
      swap(pos, pos * 2);
      pos = pos * 2;
    }
  }
  size--;
};

for (let i = 1; i <= N; i++) {
  push(+input[i]);
}

let res = 0;

while (size > 1) {
  const first = top();
  pop();
  const second = top();
  pop();
  let sum = first + second;
  res += sum;
  push(sum);
}

console.log(res);
