function solution(s)
{
    const queue = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        if (queue.length !== 0 && queue[queue.length - 1] === s[i]) {
            queue.pop();
        } else {
            queue.push(s[i]);
        }
    }
    

    return queue.length === 0 ? 1 : 0
}