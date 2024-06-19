const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sum = +input[0];
const n = +input[1];

let temp = 0;
for(let i = 2; i < n + 2; i++) {
    const [price, count] = input[i].split(' ');
    temp += Number(price) * Number(count);
}

if (temp === sum) {
    console.log('Yes');
} else {
    console.log('No');
}