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
  // 1. 우선 넣어야할 자리에 넣고 부모랑 비교
  // 2-1. 부모노드가 작은경우 그대로 둠
  // 2-2. 부모노드가 더 큰 경우 그 부모노드와 자리 바꿈 (부모노드의 자리 index / 2)
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
  // 1. 부모노드와 맨 마지막 노드 자리바꿈
  // 2. 맨 마지막노드 삭제
  // 3. 부모노드와 자식노드 비교
  //		3-1. 자식노드가 더 큰 경우 : 그대로움
  //		3-2. 자식노드가 작은 경우 : (최소값인) 자식노드와 바꿈
  // 왼쪽 자식 노드 : 2x , 오른쪽 자식 노드 : 2x + 1
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
