const dir = {
    'U': [-1, 0],
    'D': [1, 0],
    'R': [0, 1],
    'L': [0, -1]
}

const makeKey = (y1, x1, y2, x2) => {
    return x1 < x2 || y1 < y2 ? 
            "" + y1 + x1 + "-" + y2 + x2 
            : "" + y2 + x2 + "-" + y1 + x1
}

const getNextPos = (cur, dir) => {
    let y = cur[0] + dir[0];
    if (y < 0) y = 0;
    else if (y > 10) y = 10;
    
    let x = cur[1] + dir[1];
    if (x < 0) x = 0;
    else if (x > 10) x = 10;
    
    return ([y, x]);
}

function solution(dirs) {
    var answer = 0;
    let cur = [5, 5];
    const visited = {};
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            visited[makeKey(i, j, i+1, j)] = 0;
            visited[makeKey(i, j, i, j+1)] = 0;
        }
    }
    
    for (let i = 0; i < dirs.length; i++) {
        const d = dirs[i];
        const next = getNextPos(cur, dir[d]);
        // console.log(makeKey(cur[1], cur[0], next[1], next[0]))
        if (!(cur[0] === next[0] && cur[1] === next[1]) 
            && visited[makeKey(cur[1], cur[0], next[1], next[0])] === 0) {
            answer++;
            visited[makeKey(cur[1], cur[0], next[1], next[0])] = 1;
        }
        cur = next;
    }
    // console.log(visited)
    
    return answer;
}