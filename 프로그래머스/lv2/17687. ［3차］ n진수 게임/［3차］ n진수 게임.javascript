function solution(n, t, m, p) {
    var answer = '';
    let cur = 0;
    let idx = 1;
    let save = cur.toString(n).split('');
    
    p = p === m ? 0 : p;
    
    while (answer.length !== t) {
        if (save.length === 0) {
            cur++;
            save = cur.toString(n).toUpperCase().split('');
        } else {
            if (idx % m === p) {
                answer += save.shift();
            } else {
                save.shift();
            }
            idx++;
        }
        
    }
    return answer;
}