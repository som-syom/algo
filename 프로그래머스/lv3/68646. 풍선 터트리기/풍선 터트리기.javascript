function solution(a) {
    
    const check = (arr) => {
        const list = [];
        let x = arr[0];
        arr.forEach((el) => {
            if (el < x) x = el;
            list.push(x);
        })
        return list;
    }
    const s = new Set([...check(a).concat(check(a.reverse()))])
    
    return s.size;
}