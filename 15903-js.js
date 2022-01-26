const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");

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
    (pos * 2 <= size && heap[pos] > heap[pos * 2]) ||
    (pos * 2 + 1 <= size && heap[pos] > heap[pos * 2 + 1])
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

const nums = input[1].split(" ");
for (let i = 0; i < +N; i++) {
  push(+nums[i]);
  // console.log(heap);
}

let res = 0;
for (let i = 0; i < +M; i++) {
  const first = top();
  pop();
  const second = top();
  pop();
  const sum = first + second;
  push(sum);
  push(sum);
}

heap.map((num) => (res += num));

console.log(res);
