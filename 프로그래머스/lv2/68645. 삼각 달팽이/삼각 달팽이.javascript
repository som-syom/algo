function solution(n) {
  var arr = Array.from(Array(n), (el, i) => Array(i + 1).fill(0));
  const dir = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let count = n;
  let cur = [0, 0];
  let num = 1;

  const getNextDir = (c, d) => {
    return [c[0] + d[0], c[1] + d[1]];
  };

  while (count) {
    for (let i = 0; i < count; i++) {
      arr[cur[0]][cur[1]] = num;
      num++;

      if (i === count - 1) cur = getNextDir(cur, dir[1]);
      else cur = getNextDir(cur, dir[0]);
    }
    dir.push(dir.shift());
    count--;
  }

  return [].concat(...arr);
}