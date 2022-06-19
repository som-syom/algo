function solution(sizes) {
    const max = [0, 0];

    for (let i = 0; i < sizes.length; i++) {
        const x = Math.max(sizes[i][0], sizes[i][1]);
        const y = Math.min(sizes[i][0], sizes[i][1]);
        max[0] = Math.max(max[0], x);
        max[1] = Math.max(max[1], y);
    }
    

    return max[0] * max[1];
}