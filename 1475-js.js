const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const str = input[0];
const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < str.length; i += 1) {
  if (str[i] === "6" || str[i] === "9") {
    if (arr[6] > arr[9]) arr[9]++;
    else arr[6]++;
  } else arr[+str[i]]++;
}
let res = 0;
arr.map((n) => {
  if (res < n) res = n;
});
console.log(res);
