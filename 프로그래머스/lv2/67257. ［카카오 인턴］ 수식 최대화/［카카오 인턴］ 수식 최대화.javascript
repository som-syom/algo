const list = [
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['*', '-', '+'],
    ['*', '+', '-']
];

function solution(expression) {
    var answer = 0;
    let sums = [];
    
    for (let operators of list) {
        const tmp = expression.split(/(\D)/);
        for (let op of operators) {
            while (tmp.includes(op)) {
                const idx = tmp.indexOf(op);
                tmp.splice(idx - 1, 3, eval(tmp.slice(idx - 1, idx + 2).join('')));
            }
        }
        sums.push(Math.abs(tmp[0]));
    }
    answer = Math.max(...sums);
    return answer;
}