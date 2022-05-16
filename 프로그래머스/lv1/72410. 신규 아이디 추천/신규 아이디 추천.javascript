function solution(new_id) {
    let answer = new_id;
    
    // 1
    answer = answer.toLowerCase();
    
    // 2
    answer = answer.match(/[a-z]|[0-9]|\.|_|-/g).join('');
    
    // 3
    answer = answer.replace(/\.{2,}/g, '.');
    
    // 4
    answer = answer.replace(/^\.|\.$/g, '');
    
    // 5
    if (answer === "") answer = "a";
    
    // 6
    if (answer.length >= 16) answer = answer.slice(0, 15).replace(/\.$/g, '');
    
    // 7
    if (answer.length <= 2) {
        while (answer.length !== 3) {
            answer = answer + answer[answer.length - 1];
        }
    }
    
    return answer;
}