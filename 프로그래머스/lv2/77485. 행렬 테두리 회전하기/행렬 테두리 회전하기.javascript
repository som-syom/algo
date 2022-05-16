function solution(rows, columns, queries) {
  var answer = [];
  let arr = [];
  let idx = 1;
  for (let i = 0; i < rows; i++) {
    arr.push([]);
    for (let j = 0; j < columns; j++) arr[i].push(idx++);
  }

  for (let i = 0; i < queries.length; i++) {
    const [fromY, fromX, toY, toX] = queries[i].map((e) => e - 1);
    let cur = [fromY, fromX];

    let save = arr[cur[0]][cur[1]];
    let tmp = [];
    arr[cur[0]][cur[1]] = arr[cur[0] + 1][cur[1]];
    let min = save;
    cur[1]++;
    for (let x = 0; x < toX - fromX; x++, cur[1]++) {
      tmp = arr[cur[0]][cur[1]];
      arr[cur[0]][cur[1]] = save;
      save = tmp;
      min = Math.min(min, save);
    }
    cur[1]--;
    cur[0]++;
    for (let y = 0; y < toY - fromY; y++, cur[0]++) {
      tmp = arr[cur[0]][cur[1]];
      arr[cur[0]][cur[1]] = save;
      save = tmp;
      min = Math.min(min, save);
    }
    cur[0]--;
    cur[1]--;
    for (let x = 0; x < toX - fromX; x++, cur[1]--) {
      tmp = arr[cur[0]][cur[1]];
      arr[cur[0]][cur[1]] = save;
      save = tmp;
      min = Math.min(min, save);
    }
    cur[1]++;
    cur[0]--;
    for (let y = 0; y < toY - fromY; y++, cur[0]--) {
      tmp = arr[cur[0]][cur[1]];
      arr[cur[0]][cur[1]] = save;
      save = tmp;
      min = Math.min(min, save);
    }
    answer.push(min);
  }

  return answer;
}