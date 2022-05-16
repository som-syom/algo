let dict = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function solution(msg) {
    var answer = [];
    
    for (let i = 0; i < msg.length; i++) {
        let num = 2;
        while (1) {
            let w = msg.slice(i, i + num);
            const idx = dict.findIndex(el => el === w);

            if (idx === -1) {
                answer.push(dict.findIndex(el => el === msg.slice(i, i + num - 1)) + 1);
                dict.push(w);
                i += num - 2;
                break ;
            } else {
                if (i + num >= msg.length) {
                    answer.push(idx + 1);
                    i = msg.length;
                    break;
                }
                num++;
            }
        }
    }
    
    return answer;
}