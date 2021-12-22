const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
let res = "";

for (let i = 1; i <= N; i += 1) {
  let [first, second] = input[i].split(" ");
  const arr1 = first.split("");
  const arr2 = second.split("");
  const tmp = [];

  if (first.length !== second.length) {
    res += "Impossible\n";
  } else {
    let len = first.length;

    for (let j = 0; j < len; j += 1) {
      for (let k = j; k < len; k += 1) {
        if (arr1[j] === arr2[j]) break;
        if (arr1[j] === arr2[k] && tmp[j] !== 1) {
          if (j !== k) {
            let tmp = arr2[k];
            arr2[k] = arr2[j];
            arr2[j] = tmp;
          }
          tmp[j] = 1;
          break;
        }
      }
    }

    if (arr1.join("") === arr2.join("")) res += "Possible\n";
    else res += "Impossible\n";
  }
}
console.log(res);
