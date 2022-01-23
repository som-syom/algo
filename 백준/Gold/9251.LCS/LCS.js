const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const first = input[0];
const second = input[1];

const dp = [];
const flen = first.length;
const slen = second.length;

for (let i = 0; i < flen + 1; i += 1) {
  dp[i] = [];
  for (let j = 0; j < slen + 1; j += 1) {
    dp[i][j] = 0;
  }
}

for (let i = 1; i <= flen; i += 1) {
  for (let j = 1; j <= slen; j += 1) {
    if (first[i - 1] === second[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[flen][slen]);
