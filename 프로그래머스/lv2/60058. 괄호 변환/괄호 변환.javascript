function solution(p) {
    var answer = '';
    var open = 0;
    var close = 0;
    
    if (!p) return ''; 
    
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') open++;
        else close++;
        
        if (open === close) {
            if (isVaild(p.slice(0, i + 1))) {
                answer = p.slice(0, i + 1) + solution(p.slice(i + 1));
                return answer;
            } else {
                answer = '(' + solution(p.slice(i + 1)) + ')';
                
                for (let j = 1; j < i; j++) {
                    if (p[j] === '(') {
                        answer = answer + ')';
                    } else {
                        answer = answer + '(';
                    }
                }
                return answer;
            }
        }
    }    
}

const isVaild = (str) => {
    var stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push('(')
        } else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return true;
}