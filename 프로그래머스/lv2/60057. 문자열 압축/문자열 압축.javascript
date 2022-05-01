function solution(s) {
    var answer = 0;
    const len = s.length;
    let min = 1e6;
    
    const makeShort = (n) => {
        let cnt = 1;
        let save = s.slice(0, n);
        let newStr = "";
        
        for (let i = n; i < len + n; i += n) {
            // console.log("1", save, s.slice(i, i + n));
            if (save !== s.slice(i, i + n)) {
                // console.log("in", save, s.slice(i, i + n));
                while (save !== s.slice(i, i + n)) {
                    
                    newStr += save;
                    save = s.slice(i, i + n);
                    i+=n;
                }
                
                i -= n;
            } else {
                while (save === s.slice(i, i + n)) {
                    cnt++;
                    i += n;
                }
                newStr += cnt + save;
                save = s.slice(i, i + n);
                cnt = 1;
            }
        }
        // console.log("save", save);
        if (save.length !== n) newStr += save;
        // console.log(newStr)
        return (newStr);
        
    }
    if (len === 1) return 1;
    
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        const s = makeShort(i);
        if (min > s.length) {
            min = s.length;
        }
    }
    answer = min;
    
    return answer;
}