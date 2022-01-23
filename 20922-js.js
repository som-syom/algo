const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ");
const arr = input[1].split(" ");

const count = [];
let start = 0;
let end = 1;
let len = 1;
let tmp = 1;
count[+arr[start]] = 1;
while (start < +N && end < +N) {
  if (count[+arr[end]] === undefined) {
    count[+arr[end]] = 1;
    tmp++;
  } else if (count[+arr[end]] <= +K) {
    count[+arr[end]]++;
    tmp++;
  }
  if (count[+arr[end]] > +K) {
    while (count[+arr[end]] > +K) {
      count[+arr[start]]--;
      start++;
      tmp--;
    }
  }
  len = Math.max(len, tmp);
  end++;
}
console.log(len);
