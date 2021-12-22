const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let str1 = input[0];
let str2 = input[1];

const arr1 = [];
const arr2 = [];

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if (arr2[j] !== 1 && str1[i] === str2[j]) {
      arr1[i] = 1;
      arr2[j] = 1;
      break;
    }
  }
}

let res = 0;
let cnt = 0;
arr1.map((n) => {
  if (n === 1) cnt += 1;
});
res += str1.length - cnt;
cnt = 0;
arr2.map((n) => {
  if (n === 1) cnt += 1;
});
res += str2.length - cnt;

console.log(res);
