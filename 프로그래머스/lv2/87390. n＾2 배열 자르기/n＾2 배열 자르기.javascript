function solution(n, left, right) {
    var answer = Array.from({length: right - left + 1}, (v, i) => {
        const y = Math.floor((i + left) / n), x = (i+left) % n;
        return x > y ? x + 1: y + 1;
    })
    return answer;
}