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
    while (
      Math.abs(heap[pos]) <= Math.abs(heap[Math.floor(pos / 2)]) &&
      pos !== 1
    ) {
      if (
        Math.abs(heap[pos]) === Math.abs(heap[Math.floor(pos / 2)]) &&
        heap[pos] > heap[Math.floor(pos / 2)]
      )
        break;
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
    (heap[pos * 2] && Math.abs(heap[pos]) >= Math.abs(heap[pos * 2])) ||
    (heap[pos * 2 + 1] && Math.abs(heap[pos]) >= Math.abs(heap[pos * 2 + 1]))
  ) {
    if (
      Math.abs(heap[pos * 2]) == Math.abs(heap[pos]) ||
      Math.abs(heap[pos * 2 + 1]) == Math.abs(heap[pos])
    ) {
      if (
        (heap[pos] <= heap[pos * 2] && heap[pos] < heap[pos * 2]) ||
        (heap[pos] < heap[pos * 2] && heap[pos] <= heap[pos * 2])
      ) {
        break;
      } else if (Math.abs(heap[pos * 2]) > Math.abs(heap[pos * 2 + 1])) {
        swap(pos * 2 + 1, pos);
        pos = pos * 2 + 1;
      } else {
        swap(pos * 2, pos);
        pos = pos * 2;
      }
    } else if (Math.abs(heap[pos * 2]) > Math.abs(heap[pos * 2 + 1])) {
      swap(pos, pos * 2 + 1);
      pos = pos * 2 + 1;
    } else {
      swap(pos, pos * 2);
      pos = pos * 2;
    }
  }
  size--;
};

let res = "";

for (let i = 1; i <= N; i++) {
  let num = +input[i];

  if (num === 0) {
    res += top() + "\n";
    pop();
  } else {
    push(num);
  }
}
console.log(res);
