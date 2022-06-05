function solution(skill, skill_trees) {
    var answer = 0;
    const list = {};
    
    for (let i = 0; i < skill.length; i++) {
        list[skill[i]] = i;
    }
    
    for (let i = 0; i < skill_trees.length; i++) {
        const str = skill_trees[i];
        let cur = 0;
        let flag = true;
        
        for (let j = 0; j < str.length; j++) {
            if (list[str[j]] === undefined) continue;
            else if (cur >= list[str[j]]) {
                cur++;
            } else {
                flag = false;
                break;
            }
        }
        
        if (flag) answer++;
    }
    
    return answer;
}