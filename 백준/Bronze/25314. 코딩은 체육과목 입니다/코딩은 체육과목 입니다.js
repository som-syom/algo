const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

const count = Math.floor(n / 4);
let result = '';
for(let i = 0; i < count; i++) {
    result += 'long ';
}
console.log(result + 'int');