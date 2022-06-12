function solution(line) {
    var answer = [];
    const list = [];
    let mx = [-1e15, 1e15];
    let my = [-1e15, 1e15];
    
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const x = ((line[i][1] * line[j][2]) - (line[i][2] * line[j][1]))
                / ((line[i][0] * line[j][1]) - (line[i][1] * line[j][0]));
            const y = ((line[i][2] * line[j][0]) - (line[i][0] * line[j][2]))
                / ((line[i][0] * line[j][1]) - (line[i][1] * line[j][0]));
            if (Number.isInteger(x) && Number.isInteger(y)) {
                mx[0] = Math.max(mx[0], x);
                mx[1] = Math.min(mx[1], x);
                my[0] = Math.max(my[0], y);
                my[1] = Math.min(my[1], y);
                list.push([y, x]);
            }
        }
    }
    // draw
    const ylen = my[0] - my[1] + 1;
    const xlen = mx[0] - mx[1] + 1;
    answer = Array.from(Array(ylen), () => Array(xlen).fill('.'));

    for (let i = 0; i < list.length; i++) {
        const [starY, starX] = list[i];
        answer[starY - my[1]][starX - mx[1]] = '*';
    }
    answer = answer.map((el) => el.join('')).reverse();
    
    return answer;
}