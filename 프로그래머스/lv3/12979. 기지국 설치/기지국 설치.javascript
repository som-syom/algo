function solution(n, stations, w) {
    var answer = 0;
    const len = stations.length;
    // let prev = 0;
    
    stations.forEach((el, idx) => {
        const prev = idx === 0 ? 1 : stations[idx - 1] + w + 1;
        answer += Math.ceil(((el - w) - prev) / (w * 2 + 1));
        if (len - 1 === idx && el + w < n) {
            answer += Math.ceil((n - (el + w)) / (w * 2 + 1));
        }
    });
    
    return answer;
}