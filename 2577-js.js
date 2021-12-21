const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sum = +input[0] * +input[1] * +input[2];
const str = "" + sum;

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < str.length; i += 1) {
  switch (str[i]) {
    case "0":
      arr[0]++;
      break;
    case "1":
      arr[1]++;
      break;
    case "2":
      arr[2]++;
      break;
    case "3":
      arr[3]++;
      break;
    case "4":
      arr[4]++;
      break;
    case "5":
      arr[5]++;
      break;
    case "6":
      arr[6]++;
      break;
    case "7":
      arr[7]++;
      break;
    case "8":
      arr[8]++;
      break;
    case "9":
      arr[9]++;
      break;
  }
}
let res = "";
arr.map((num) => {
  res += num + "\n";
});

console.log(res);
