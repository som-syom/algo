const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = Array.from({ length: 30 }, () => false);

for (let i = 0; i < 30; i++) {
  const index = parseInt(input[i]) - 1;
  arr[index] = true;
}

const result = [];
arr.forEach((v, i) => {
  if (!v) {
    result.push(i + 1);
  }
});

console.log(result.join("\n"));
