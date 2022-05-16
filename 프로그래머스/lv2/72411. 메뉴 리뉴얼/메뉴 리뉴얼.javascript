const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}

function solution(orders, course) {
    var answer = [];
    let cases = [];
    for (let i = 0; i < course.length; i++) {
        cases[i] = new Map();
    }
    let maxCount = Array(course.length).fill(0);
    
    const makeCase = (o) => {
        for (let i = 0; i < course.length; i++) {
            const comb = getCombinations(o.split(''), course[i]).map(e => e.sort().join(''));
            comb.map((e) => {
                if (cases[i].has(e)) {
                    cases[i].set(e, cases[i].get(e) + 1);
                    maxCount[i] = Math.max(maxCount[i], cases[i].get(e));
                } else {
                    cases[i].set(e, 1);
                }
            })
        }
    }
    
    
    for (let i = 0; i < orders.length; i++) {
        makeCase(orders[i]);
    }
    
    for (let i = 0; i < course.length; i++) {
        cases[i].forEach((value, key) => {
            if (value === maxCount[i])
                answer.push(key);
        })
    }
    answer.sort();
    return answer;
}