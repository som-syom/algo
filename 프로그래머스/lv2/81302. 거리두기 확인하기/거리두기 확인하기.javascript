function solution(places) {
    var answer = [];
    const nx = [0, -1, 0, 1];
    const ny = [1, 0, -1, 0];
    
    const checkInvalid = (k, i, j) => {
        const visited = [];
        for (let i = 0; i < 5; i++) {
            visited.push(Array(5).fill(0))
        }
        const tmp = places[k];
        const queue = [[i, j]];
        const cq = [0];
        visited[i][j] = 1;
        let res = false;
        
        while (queue.length) {
            let [y, x] = queue.pop();
            let cnt = cq.pop();
            
            if (cnt !== 0 && tmp[y][x] === 'P') {
                // console.log("in", k, y, x, visited)
                res = true;
                break ;
            }
            
            for (let m = 0; m < 4; m++) {
                const mx = x + nx[m];
                const my = y + ny[m];
                
                if (mx >= 0 && mx < 5 && my >= 0 && my < 5 && cnt < 2 
                    && visited[my][mx] === 0 && tmp[my][mx] !== 'X') {
                    visited[my][mx] = 1;
                    queue.push([my, mx]);
                    cq.push(cnt + 1);
                    // console.log(k,i,j,queue);
                    // console.log(my,mx, cnt, visited)
                }
            }
        }
        return res;
    }
    
    for (let k = 0; k < places.length; k++) {
        let isValid = true;
        const tmp = places[k];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (tmp[i][j] === 'P' && checkInvalid(k, i, j)) {
                    isValid = false;
                    break;
                }
            }
            if (!isValid) break ;
        }
        if (!isValid) answer.push(0);
        else answer.push(1);
    }
    return answer;
}