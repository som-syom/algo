function solution(lottos, win_nums) {
    var answer = [];
    let zero_cnt = 0;
    for (let i = 0; i < 6; i++) {
        if (lottos[i] === 0) {
            zero_cnt++;
        }
    }
    
    let correct_nums = 0;
    for (let i = 0; i < 6; i++) {
        if (win_nums.includes(lottos[i]))
            correct_nums++;
    }
    
    answer.push(correct_nums + zero_cnt === 0 ? 6 : 7 - (correct_nums + zero_cnt));
    answer.push((correct_nums) === 0 ? 6 : 7 - correct_nums);
    
    return answer;
}