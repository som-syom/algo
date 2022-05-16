const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const str = input[0];

const sub = str.split("-");
let sum = 0;
for (let i = 0; i < sub.length; i++) {
  const tmp = sub[i].split("+");
  let num = 0;
  for (let j = 0; j < tmp.length; j++) {
    num += +tmp[j];
  }
  if (i !== 0) sum += -num;
  else sum = num;
}
console.log(sum);
