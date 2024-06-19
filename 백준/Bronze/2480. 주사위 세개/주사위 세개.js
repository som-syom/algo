const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = input[0].split(' ');

if (n[0] === n[1] && n[1] === n[2]) {
    console.log(10000 + (Number(n[0]) * 1000));
} else if (n[0] === n[1] || n[1] === n[2] || n[0] === n[2]) {
    const same = n[0] === n[1] ? Number(n[0]) : Number(n[2]);
    console.log(1000 + (same * 100));
} else {
    const max = Math.max(...n);
    console.log(max * 100)
}