function solution(s) {
    var answer = [];
    const reg = /([0-9]+(,[0-9]+)+)|([0-9]+)/g;
    const arr = s.match(reg).map((el) => [...el.split(',')]).sort((a, b) => a.length - b.length);
    arr.forEach((el, idx) => {
        if (idx === 0) answer.push(el[0]);
        else {
            answer.push(el.find((e) => !answer.includes(e)));
        }
    })
    return answer.map(Number);
}